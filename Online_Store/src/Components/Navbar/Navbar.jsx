import React, { useContext, useState } from 'react';  
import './Navbar.css';  
import logo from '../Assets/logo.png';  
import cart_icon from '../Assets/cart_icon.png';  
import { Link } from 'react-router-dom';  
import { ShopContext } from '../../Context/ShopContext';  

const Navbar = () => {  
  const [menu, setMenu] = useState("shop");  
  const { getTotalCartItems } = useContext(ShopContext);  

  const categories = ['shop', 'mens', 'womens', 'kids'];  

  return (  
    <nav className='navbar'>  
      <div className="nav-logo">  
        <Link to="/">  
          <img src={logo} alt="Online Store Logo" />  
        </Link>  
        <p>OnlineStore</p>  
      </div>  

      <ul className="nav-menu">  
        {categories.map(category => (  
          <li key={category} onClick={() => setMenu(category)}>  
            <Link   
              style={{ textDecoration: 'none' }}   
              to={`/${category}`}   
              aria-current={menu === category ? 'page' : undefined}  
            >  
              {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalizes first letter */}  
            </Link>  
            {menu === category ? <hr /> : null}  
          </li>  
        ))}  
      </ul>  

      <div className="nav-login-cart">  
        <Link to='/login'>  
          <button>Login</button>  
        </Link>  
        <Link to='/cart'>  
          <img src={cart_icon} alt="Cart" />  
        </Link>  
        {getTotalCartItems() > 0 && (  
          <div className="nav-cart-count">{getTotalCartItems()}</div>  
        )}  
      </div>  
    </nav>  
  );  
}  

export default Navbar;