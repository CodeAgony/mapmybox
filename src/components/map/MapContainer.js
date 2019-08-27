import React, { useEffect, useContext } from 'react';
import ReactMapboxGl, { Layer, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import CustomMarker from './CustomMarker';

import AppContext from '../../context/appContext';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiY29kZWFnb255IiwiYSI6ImNqemg5NHE4dDBiMGczbG16cDhyb3Q1NTYifQ.h_WYdEWMtkuogpC9_l89SQ'
});

const MapContainer = () => {
  const appContext = useContext(AppContext);
  const { places, getPlaces, popupData } = appContext;

  useEffect(() => {
    getPlaces();
  }, []);

  // Add marker for each place
  const markers =
    places !== null &&
    places.features.map(place => (
      <CustomMarker
        place={place}
        key={place.id}
        coordinates={place.center}
      ></CustomMarker>
    ));

  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[28.4685, 49.2344]}
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        {popupData !== null && (
          <Popup anchor={'bottom'} offset={10} coordinates={popupData.location}>
            <h5>{popupData.text}</h5>
            <br />
            <h6>{popupData.address}</h6>
          </Popup>
        )}
        {markers}
      </Map>
    </div>
  );
};

export default MapContainer;
