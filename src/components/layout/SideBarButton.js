import React, { useContext } from 'react';
import AppContext from '../../context/appContext';

const SideBarButton = () => {
  const appContext = useContext(AppContext);

  const { setVisibility } = appContext;

  const onClick = () => {
    setVisibility();
  };
  return (
    <div className="sidebar-button" onClick={onClick}>
      <i className="fas fa-lg fa-search-location"></i>
    </div>
  );
};

export default SideBarButton;
