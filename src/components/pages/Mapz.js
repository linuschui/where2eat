import React, { useState, useEffect } from "react";
import '../../App.css';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
import useGetLocation from "../../useGetLocation"
import { Link } from 'react-router-dom';
import firebase from "../../fire";

function MapzCards() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const location = useGetLocation();
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const ref = firebase.firestore().collection("buildings");
  console.log(ref);

  function getData() {
    setLoader(true);
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setData(items)
      setLoader(false)
    })
  }

  useEffect(() => {
    getData()
    console.log(data)
  }, [])

  return (
    < GoogleMap
      defaultZoom={12}
      defaultCenter={ location.loaded ? 
        { lat: location.coordinates.lat, lng: location.coordinates.lng } : 
        { lat: 1.3521, lng: 103.8198 }}
    >
    < Marker
          key={location}
          position={{
            lat: location.coordinates.lat,
            lng: location.coordinates.lng
          }} 
          
          icon={{
            url: 'images/pin.png',
            scaledSize: new window.google.maps.Size(40, 40)
          }}
          />
        {data.map(building => (
            < Marker
              key={building.Name}
              position={{
                lat: building.Coordinates[0],
                lng: building.Coordinates[1]
              }} 
              onClick={() => {
                setSelectedBuilding(building);
              }}
              icon={{
                url: 'images/resMarker3.png',
                scaledSize: new window.google.maps.Size(40, 40)
              }}
              />
          ))}
          {selectedBuilding && (
            <InfoWindow
              onCloseClick={() => {
                setSelectedBuilding(null);
              }}
              position={{
                lat: selectedBuilding.Coordinates[0],
                lng: selectedBuilding.Coordinates[1]
              }}
            >
            <div>
              <h1>{selectedBuilding.Name}</h1>
                <Link to={selectedBuilding.Link}>
                  <h2>{selectedBuilding.Location}</h2>
                </Link>
              <p>{selectedBuilding.Address}</p>
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
