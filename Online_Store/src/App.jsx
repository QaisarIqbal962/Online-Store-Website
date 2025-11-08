import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ShopContextProvider from "./Context/ShopContext";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import bannerMen from "./Components/Assets/banner_mens.png";
import bannerWomen from "./Components/Assets/banner_women.png";
import bannerKids from "./Components/Assets/banner_kids.png";

const App = () => {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory category="men" banner={bannerMen} />}
          />
          <Route
            path="/women"
            element={<ShopCategory category="women" banner={bannerWomen} />}
          />
          <Route
            path="/kid"
            element={<ShopCategory category="kid" banner={bannerKids} />}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="*" element={<p>Page not found.</p>} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </BrowserRouter>
  );
};

export default App;
