import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const Googlemap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
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
