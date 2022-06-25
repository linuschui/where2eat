import React, { useState, useEffect } from "react";
import '../../App.css';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
import * as parkData from "../../data/skateboard-parks.json";
import * as resData from "../../data/allRestaurants.json";

function MapzCards() {
    const [selectedPark, setSelectedPark] = useState(null);
  return (
    < GoogleMap
      defaultZoom={10}
      //defaultZoom={12}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
      //defaultCenter={{ lat: 1.3521, lng: 103.8198 }} //Singapore hehe
    >
      {parkData.features.map(park => (
        < Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }} 
          onClick={() => {
            setSelectedPark(park);
          }}
          />
      ))}
      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
        
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(MapzCards));

export default function Mapz() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
      <  WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${`AIzaSyCwmRBOt8xDCDtACGpx5VbmtF44ON_HLnw`}`} //API credentials
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
