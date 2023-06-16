/** @format */

import React from "react";
import "./Home.css";

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
      <div className="home-middle-text">
        <p >Rent Our Top Categories</p>
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
      <div className="welcome-paragraphe">
        <p>
          <strong>W</strong>e are your one-stop destination for all your event needs. Whether
          you're planning a birthday party, wedding, corporate event, or any
          special occasion, we have a wide range of high-quality rentals to make
          your event unforgettable. From stylish tents and elegant tableware to
          vibrant decorations and state-of-the-art audiovisual equipment, we
          have everything you need to create the perfect atmosphere. Our
          dedicated team of event professionals is here to assist you every step
          of the way, ensuring a seamless and stress-free experience. Get ready
          to turn your vision into reality with our exceptional party and event
          rentals.
        </p>
      </div>
      <div className="home-events">
        <div>
          <p>Weeding</p>
        </div>
        <div>
          <p>Party</p>
        </div>
        <div>
          <p>Meeting</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
