import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import allProduct from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  // Try to load saved cart from localStorage. If not available, fall back to default 0 counts.
  try {
    const stored =
      typeof window !== "undefined" && localStorage.getItem("cartItems");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Ensure we return an object that has an entry for every product id
      return allProduct.reduce((accumulator, product) => {
        accumulator[product.id] = parsed[product.id] ?? 0;
        return accumulator;
      }, {});
    }
  } catch (e) {
    // ignore parse errors and continue with defaults
  }

  return allProduct.reduce((accumulator, product) => {
    accumulator[product.id] = 0;
    return accumulator;
  }, {});
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (e) {
      // If storage set fails (e.g., quota), ignore to avoid crashing the app
    }
  }, [cartItems]);

  const addToCart = useCallback((itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] ?? 0) + 1,
    }));
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return prev;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  }, []);

  const getTotalCartAmount = useCallback(() => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = allProduct.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  }, [cartItems]);

  const getTotalCartItems = useCallback(() => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }, [cartItems]);

  const contextValue = useMemo(
    () => ({
      getTotalCartItems,
      getTotalCartAmount,
      all_product: allProduct,
      cartItems,
      addToCart,
      removeFromCart,
    }),
    [
      addToCart,
      cartItems,
      getTotalCartAmount,
      getTotalCartItems,
      removeFromCart,
    ]
  );

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
