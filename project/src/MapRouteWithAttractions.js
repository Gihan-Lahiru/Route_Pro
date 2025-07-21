import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 6.9271, // Default center (Colombo)
  lng: 79.8612,
};

const MapRouteWithAttractions = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const origin = "Colombo";
  const destination = "Kandy";

  const handleDirectionsCallback = (response) => {
    if (response !== null && response.status === "OK") {
      setDirectionsResponse(response);
      setShowDirections(true);
    } else {
      console.error("Error fetching directions:", response);
    }
  };

  const onMapLoad = (map) => {
    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      location: { lat: 7.2906, lng: 80.6337 }, // Kandy center
      radius: 8000,
      type: ["tourist_attraction"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.forEach((place) => {
          new window.google.maps.Marker({
            map,
            position: place.geometry.location,
            title: place.name,
          });
        });
      }
    });
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCf05V3d2aIky8RH1RLG2aWd9dq971DMNY"
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onMapLoad}
      >
        {!showDirections && (
          <DirectionsService
            options={{
              destination,
              origin,
              travelMode: "DRIVING",
            }}
            callback={handleDirectionsCallback}
          />
        )}

        {showDirections && directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapRouteWithAttractions;
