import React,{useState, useEffect, useRef} from "react";
import "./Footer.css";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

function Footer(props) {
  const [opacity, setOpacity] = useState("1");
  

// fade effect on scroll footer
  useEffect(() => {
    if(typeof window !== "undefined"){
        window.onscroll = () => {
            let curScrollPos = window.scrollY;
            let maxScroll = document.body.scrollHeight - window.innerHeight;
            if(curScrollPos > 0 && curScrollPos < maxScroll){
                setOpacity("0")
            }
            else{
                setOpacity("1")
            }
        }
    }
    
  }, []);

  return (
    <footer className="footer" style={{opacity: `${opacity}`}}>
      <div className=""></div>

      <div className="bran-name-copywrite">&copy; Party & Events Rentals</div>

      <div className="footer-social">
        <ul>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <FaFacebook className="faceb-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <FaInstagramSquare className="insta-icon" />
            </a>
          </li>
          {/* <li><a href="#">Contact</a></li>
                    <li><a href="#">New arrival</a></li> */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
