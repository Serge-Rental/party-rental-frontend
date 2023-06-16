/** @format */

import React from "react";
import "./NavigationBar.css";
import { FaShoppingCart } from "react-icons/fa";

function NavigationBar({ cart }) {
  let totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="nav">
      <div className="bran-name">Party & Events Rentals</div>

      <div className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="cart" className="shopping-icon">
                <FaShoppingCart className="icon" /> <span>{totalItems}</span> 
              
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
