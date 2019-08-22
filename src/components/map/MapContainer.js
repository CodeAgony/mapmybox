import React, { useState } from 'react';
import ReactMapboxGl, { Layer, Marker, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiY29kZWFnb255IiwiYSI6ImNqemg5NHE4dDBiMGczbG16cDhyb3Q1NTYifQ.h_WYdEWMtkuogpC9_l89SQ'
});

const MapContainer = ({ places }) => {
  const [popup, setPopup] = useState([]);

  const onMarkerClick = function(props) {
    console.log(`marker clicked`);
    console.log(props.key);
  };
  // Add marker for each place
  const markers =
    places !== null &&
    places.features.map(feature => (
      <Marker
        key={feature.id}
        coordinates={[feature.center[0], feature.center[1]]}
        name={feature.name}
        onClick={onMarkerClick}
      ></Marker>
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
        <Popup coordinates={[28.4685, 49.2344]}>lol</Popup>
        <Layer
          type="symbol"
          id="marker"
          layout={{ 'icon-image': 'restaurant-15' }}
        >
          {markers}
        </Layer>
      </Map>
    </div>
  );
};

export default MapContainer;
