import React, { useContext } from 'react';
import { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Icon from './restaurant-15.svg';

import AppContext from '../../context/appContext';

const CustomMarker = ({ feature }) => {
  const appContext = useContext(AppContext);
  const { setPopup } = appContext;

  const handleClick = () => {
    setPopup(feature);
  };

  return (
    <Marker
      coordinates={[feature.center[0], feature.center[1]]}
      onClick={handleClick}
    >
      <img src={Icon} className="noselect" alt="" />
    </Marker>
  );
};

export default CustomMarker;
