import React from 'react';
import './Banner.css'
import { FaCheckCircle } from "react-icons/fa";

function Banner() {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="call-to-action">
                    <p>LIMITED TIME OFFER</p>
                    <p>50% off</p>
                    <a href="/products/All">SHOP NOW</a>
                </div>
                <div className="banner-image">
                </div>
            </div>
          
        </div>
    );
}

export default Banner;