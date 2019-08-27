import React, { useContext } from 'react';
import { Popup } from 'react-mapbox-gl';
import AppContext from '../../context/appContext';

const CustomPopup = () => {
  const appContext = useContext(AppContext);
  const { popupData } = appContext;

  return (
    <Popup anchor={'bottom'} offset={25} coordinates={popupData.location}>
      <h5>{popupData.text}</h5>
      <h6>{popupData.address}</h6>
    </Popup>
  );
};

export default CustomPopup;
