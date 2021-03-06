import React, { useEffect, useContext } from 'react';
import ReactMapboxGl, { Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import CustomMarker from './CustomMarker';
import CustomPopup from './CustomPopup';

import AppContext from '../../context/appContext';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiY29kZWFnb255IiwiYSI6ImNqemg5NHE4dDBiMGczbG16cDhyb3Q1NTYifQ.h_WYdEWMtkuogpC9_l89SQ'
});

const MapContainer = () => {
  const appContext = useContext(AppContext);
  const { places, getPlaces, popupData, filteredPlaces } = appContext;

  useEffect(() => {
    getPlaces();
  }, []);

  // Add marker for each place
  const markers = () => {
    if ((places !== null) & (!filteredPlaces.length > 0)) {
      return places.map(place => (
        <CustomMarker place={place} key={place.id} coordinates={place.center} />
      ));
    } else if (filteredPlaces.length > 0) {
      return filteredPlaces.map(place => (
        <CustomMarker
          place={place}
          key={place.id}
          coordinates={place.center}
        ></CustomMarker>
      ));
    }
  };

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
        {(popupData !== undefined) & (typeof popupData !== 'string') && (
          <CustomPopup></CustomPopup>
        )}
        {markers()}
      </Map>
    </div>
  );
};

export default MapContainer;
