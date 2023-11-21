/** @format */

import React, {useState} from "react";
import "./NavigationBar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavigationBar({ cart }) {
  const [isOpen, setIsOpen] = useState(false);

   // Function to close the nav
   const closeNav = () => {
    setIsOpen(false);
  };

  let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="nav">
      <div className='menu-toggle' onClick={() => setIsOpen(!isOpen)}>
          &#9776; {/* This is the HTML entity for the hamburger icon */}
        </div>
      <div className="bran-name"><Link to="/">Party & Events Rentals</Link></div>
      <div className="">
      <Link to="/cart" className="mobile-shopping-cart" onClick={closeNav}>
                <FaShoppingCart className="icon" /> <span>{totalItems}</span> 
              
            </Link>
      </div>

      <div className="nav-links">
        <ul className={isOpen && "nav-list active"}>
          <li>
            <Link to="/" onClick={closeNav}>Home</Link>
          </li>
          <li>
            <Link to="/products/All" onClick={closeNav}>Products</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeNav}>Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="shopping-icon" onClick={closeNav}>
                <FaShoppingCart className="icon" /> <span>{totalItems}</span> 
              
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
