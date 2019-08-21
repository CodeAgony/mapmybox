import React from 'react';
import ReactMapboxGl, { Layer, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiY29kZWFnb255IiwiYSI6ImNqemg5NHE4dDBiMGczbG16cDhyb3Q1NTYifQ.h_WYdEWMtkuogpC9_l89SQ'
});

const MapContainer = ({ places }) => {
  // Add marker for each place
  const markers =
    places !== null &&
    places.features.map(feature => (
      <Marker
        key={feature.id}
        coordinates={[feature.center[0], feature.center[1]]}
      />
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
