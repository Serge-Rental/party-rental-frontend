/** @format */

import React from "react";
import "./Home.css";
import Banner from "./Banner";

function Home(props) {
  return (
    <div className="home">
      <div className="home-head">
          {/* <h1>Welcome To SERGE Event & Party Rentals</h1> */}
          {/* <h2>
                RENT Tents | Chairs | Tables | Lightning | Speackers | Dj
                Equipments
              </h2>
              <h3>Contact Us 646-852-5930 & sergeEventRental@gmail.com</h3> */}
      </div>
      <Banner />
      <div className="content">
        <div className="home-middle-text">
          <p>Product Top Categories</p>
        </div>

        <div className="flex-container">
          <div className="flex-item">
            <p>Tents</p>
            <img src="https://media-api.theknot.com/images/0b4ad1c3-0c73-41a8-ab72-4989d618a052" />
          </div>
          <div className="flex-item">
            <p>Lightning</p>
            <img src="https://i.etsystatic.com/23583625/r/il/db0e81/2475508712/il_794xN.2475508712_iv1d.jpg" />
          </div>
          <div className="flex-item">
            <p>Tables</p>
            <img src="https://cdn0.weddingwire.com/vendor/731463/3_2/640/jpg/1476798924-417360c3691eaa25-ERG_pic_1.webp" />
          </div>
          <div className="flex-item">
            <p>Sound</p>
            <img src="https://i.ytimg.com/vi/tPZjasYw6_A/maxresdefault.jpg" />
          </div>
        </div>
        <div className="welcome-paragraph">
          <h2>
            <strong>About Us</strong>
          </h2>
          <p>
            <strong>W</strong>e are your one-stop destination for all your event
            needs. Whether you're planning a birthday party, wedding, corporate
            event, or any special occasion, we have a wide range of high-quality
            rentals to make your event unforgettable. From stylish tents and
            elegant tableware to vibrant decorations and state-of-the-art
            audiovisual equipment, we have everything you need to create the
            perfect atmosphere. Our dedicated team of event professionals is
            here to assist you every step of the way, ensuring a seamless and
            stress-free experience. Get ready to turn your vision into reality
            with our exceptional party and event rentals.
          </p>
        </div>
        <div className="events-types">
          <div className="corporate-event">
            <p>Corporate events</p>
          </div>
          <div className="weedings">
            <p>Weedings</p>
          </div>
          <div className="private-party">
            <p>Private parties</p>
          </div>
          <div className="schools-event">
            <p>Schools events</p>
          </div>
        </div>
        <div className="home-contact">
          <div className="general-contact">
            <h2>Contact Us</h2>
            <h3>We’d love to work with you to make your next event amazing!</h3>
            <p>
              <strong>Our phone number is</strong>: (212) 062-2080
            </p>
            <p>
              <strong>Our showroom is located at</strong>: 4518 S 500 W New
              York, NY 84123
            </p>
            <ul>
              <li>Mon - Fri 8:00am - 5:30pm</li>
              <li>Saturday 8:00am - 4:30pm</li>
              <li>Closed Sundays</li>
            </ul>
          </div>
          <div className="contact-img"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
