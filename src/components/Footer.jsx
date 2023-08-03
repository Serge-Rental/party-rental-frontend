import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

function Footer(props) {
    return (
        <footer className="footer">

            <div className="">
                
            </div>

            <div className="bran-name-copywrite">
            &copy; Party & Events Rentals
            </div>

            <div className="footer-social">
                <ul>
                    <li><a href="https://www.instagram.com/"  target="_blank"><FaFacebook className="faceb-icon" /></a></li>
                    <li><a href="https://www.facebook.com/"  target="_blank"><FaInstagramSquare className="insta-icon" /></a></li>
                    {/* <li><a href="#">Contact</a></li>
                    <li><a href="#">New arrival</a></li> */}
                </ul>
            </div>
            
        </footer>
    );
}

export default Footer;