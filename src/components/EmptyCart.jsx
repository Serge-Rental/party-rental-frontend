import React from 'react';
import { Link } from "react-router-dom";
import './EmptyCart.css'

function EmptyCart() {
    return (
        <div className="empty-cart">
            <div className="empty-cart-img"></div>
            <div className="message">
                <h1>Your cart is Empty</h1>
                <Link to="/products/All">Back to our products</Link>
            </div>
           

        </div>
    );
}

export default EmptyCart;