import React, { useState, useEffect, useContext } from 'react';
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

  const { places, getPlaces } = appContext;

  useEffect(() => {
    getPlaces();
  }, []);

  const [popup, setPopup] = useState(null);
  const handleClick = () => {
    Map.flyTo({ center: [14, 25] });
    setPopup();
  };
  // Add marker for each place
  // const markers =
  //   places !== null &&
  //   places.features.map(feature => (
  //     <CustomMarker
  //       feature={feature}
  //       key={feature.id}
  //       coordinates={[feature.center[0], feature.center[1]]}
  //       name={feature.name}
  //       onClick={handleClick}
  //       Map={Map}
  //     ></CustomMarker>
  //   ));

  // const popups = popup !== null && (
  //   <Popup
  //     popup={popup}
  //     places={places}
  //     coordinates={popup.lngLat}
  //     anchor={'bottom'}
  //     offset={10}
  //   >
  //     <h5>lol</h5>
  //   </Popup>
  // );

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
        {/* {popups} */}
        <Layer
          type="symbol"
          id="marker"
          layout={{ 'icon-image': 'restaurant-15' }}
        >
          {/* {markers} */}
        </Layer>
      </Map>
    </div>
  );
};

export default MapContainer;
