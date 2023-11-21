import React from 'react';
import './EmptyCart.css'

function EmptyCart() {
    return (
        <div className="empty-cart">
            <div className="empty-cart-img"></div>
            <div className="message">
                <h1>Your cart is Empty</h1>
                <a href="/products/All">Back to our products</a>
            </div>
           

        </div>
    );
}

export default EmptyCart;