/** @format */

import React from "react";
import "./NavigationBar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavigationBar({ cart }) {
  let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="nav">
      <div className="bran-name"><Link to="/">Party & Events Rentals</Link></div>

      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="shopping-icon">
                <FaShoppingCart className="icon" /> <span>{totalItems}</span> 
              
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
