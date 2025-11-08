import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const NAV_LINKS = [
  { id: "shop", label: "Shop", path: "/" },
  { id: "men", label: "Men", path: "/men" },
  { id: "women", label: "Women", path: "/women" },
  { id: "kid", label: "Kids", path: "/kid" },
];

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const location = useLocation();
  const { getTotalCartItems } = useContext(ShopContext);

  useEffect(() => {
    const activeLink =
      NAV_LINKS.find((link) => {
        if (link.path === "/") {
          return location.pathname === "/";
        }
        return location.pathname.startsWith(link.path);
      }) ?? NAV_LINKS[0];
    setMenu(activeLink.id);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Online Store Logo" />
        </Link>
        <p>OnlineStore</p>
      </div>

      <ul className="nav-menu">
        {NAV_LINKS.map((link) => (
          <li key={link.id} onClick={() => setMenu(link.id)}>
            <Link
              style={{ textDecoration: "none" }}
              to={link.path}
              aria-current={menu === link.id ? "page" : undefined}
            >
              {link.label}
            </Link>
            {menu === link.id ? <hr /> : null}
          </li>
        ))}
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" />
        </Link>
        {getTotalCartItems() > 0 && (
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
