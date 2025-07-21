import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "./route.css";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 7.8731,
  lng: 80.7718,
};

const RoutePlanner = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [transport, setTransport] = useState("DRIVING");
  const [response, setResponse] = useState(null);
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  const [fuelCost, setFuelCost] = useState(null);

  const calculateRoute = () => {
    if (origin !== "" && destination !== "") {
      setResponse(null);
    }
  };

  const directionsCallback = (res) => {
    if (res !== null && res.status === "OK") {
      setResponse(res);
      const leg = res.routes[0].legs[0];
      setDistance(leg.distance.text);
      setDuration(leg.duration.text);

      const km = parseFloat(leg.distance.text); // example "145 km"
      if (!isNaN(km)) {
        setFuelCost(Math.round(km * 17));
      }
    }
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        <h2>Route Planner</h2>
        <input
          type="text"
          placeholder="Enter starting location"
          className="input-field"
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter destination"
          className="input-field"
          onChange={(e) => setDestination(e.target.value)}
        />
        <select
          className="input-field"
          onChange={(e) => setTransport(e.target.value)}
        >
          <option value="DRIVING">Select transport</option>
          <option value="TWO_WHEELER">Bike</option>
          <option value="DRIVING">Car</option>
          <option value="WALKING">Van</option>
        </select>
        <button onClick={calculateRoute} className="route-button">
          Find Best Route
        </button>

        {distance && duration && (
          <div className="route-info">
            <h3>Route Information</h3>
            <p>
              🕒 Duration: <strong>{duration}</strong>
            </p>
            <p>
              📏 Distance: <strong>{distance}</strong>
            </p>
            <p>
              ⛽ Fuel Cost: <strong>LKR {fuelCost}</strong>
            </p>
          </div>
        )}
      </div>

      <div className="map-container">
        <LoadScript
          googleMapsApiKey="AIzaSyCf05V3d2aIky8RH1RLG2aWd9dq971DMNY"
          libraries={["places"]}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
          >
            {origin && destination && (
              <DirectionsService
                options={{
                  destination: destination,
                  origin: origin,
                  travelMode: transport,
                }}
                callback={directionsCallback}
              />
            )}
            {response !== null && (
              <DirectionsRenderer options={{ directions: response }} />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default RoutePlanner;
