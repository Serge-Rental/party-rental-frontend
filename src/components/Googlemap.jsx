import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import env from"react-dotenv"

const Googlemap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCW5pCt2joORsS-s9WplOyjsRg3PL1B68s",
  });
  const center = useMemo(() => ({ lat: 40.730610, lng: -73.935242 }), []);
  return (
    <div className="map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : ( 
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}>
          <Marker position={{ lat: 40.730610, lng: -73.935242 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Googlemap;
