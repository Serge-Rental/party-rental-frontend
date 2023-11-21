import React, { useEffect } from 'react';
import './OrderConfirmation.css'
import { FaCheckCircle } from "react-icons/fa";

function OrderConfirmation() {
  
    return (
        <div className="confirmation">
            <div className="confirm-content">
                <h1>Your order has been received</h1>
                <div className="icon-div">
                    <FaCheckCircle className="check-icon" />
                </div>
                <h2>Thank you for renting with us !</h2>
                <p>Your order ID is : 5615615556sbhhs55</p>
                <p>You will receive an order confirmation email with details of your order.</p>
                <a className="confirm-button" href='/products'>CONTINUE SHOPPING</a>
            </div>
          
        </div>
    );
}

export default OrderConfirmation;