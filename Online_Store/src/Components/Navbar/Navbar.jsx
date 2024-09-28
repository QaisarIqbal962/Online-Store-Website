import React, { useContext, useState } from 'react';  
import './Navbar.css';  
import logo from '../Assets/logo.png';  
import cart_icon from '../Assets/cart_icon.png';  
import { Link } from 'react-router-dom';  
import { ShopContext } from '../../Context/ShopContext';  

const Navbar = () => {  
  const [menu, setMenu] = useState("shop");  
  const { getTotalCartItems } = useContext(ShopContext);  

  return (  
    <div className='navbar'>  
      <div className="nav-logo">  
        <img src={logo} alt="Logo" />  
        <p>OnlineStore</p>  
      </div>  
      <ul className="nav-menu">  
        {['shop', 'mens', 'womens', 'kids'].map(category => (  
          <li key={category} onClick={() => setMenu(category)}>  
            <Link style={{ textDecoration: 'none' }} to={`/${category}`}>  
              {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalizes first letter */}  
            </Link>  
            {menu === category ? <hr /> : null}  
          </li>  
        ))}  
      </ul>  
      <div className="nav-login-cart">  
        <Link to='/login'><button>Login</button></Link>  
        <Link to='/cart'>  
          <img src={cart_icon} alt="Cart" />  
        </Link>  
        <div className="nav-cart-count">{getTotalCartItems()}</div>  
      </div>  
    </div>  
  );  
}  

export default Navbar;
