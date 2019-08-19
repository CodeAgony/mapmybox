import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapContainer = () => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiY29kZWFnb255IiwiYSI6ImNqemg5NHE4dDBiMGczbG16cDhyb3Q1NTYifQ.h_WYdEWMtkuogpC9_l89SQ'
  });

  return (
    <div>
      <h1>map here</h1>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[28.4685, 49.2344]}
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'rocket-15' }}>
          <Feature coordinates={[28.4685, 49.2344]} />
        </Layer>
      </Map>
    </div>
  );
};

export default MapContainer;
