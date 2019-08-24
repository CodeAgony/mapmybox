import React from 'react';
import { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const CustomMarker = ({ feature, setPopup, Map }) => {
  const handleClick = () => {
    setPopup(feature);
    Map.flyTo({ center: [14, 25] });
  };

  return (
    <Marker
      coordinates={[feature.center[0], feature.center[1]]}
      name={feature.name}
      onMouseDown={{ handleClick }}
    ></Marker>
  );
};

export default CustomMarker;
