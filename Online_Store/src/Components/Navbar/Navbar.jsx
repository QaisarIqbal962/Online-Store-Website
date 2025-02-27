import React, { useContext, useState } from 'react';  
import './Navbar.css';  
import logo from '../Assets/logo.png';  
import cart_icon from '../Assets/cart_icon.png';  
import { Link } from 'react-router-dom';  
import { ShopContext } from '../../Context/ShopContext';  

const Navbar = () => {  
  const [menu, setMenu] = useState("shop");  

      </div>  
    </nav>  
  );  
}  

export default Navbar;