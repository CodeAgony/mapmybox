import React from 'react';

const SideBarButton = ({ isVisible, setVisibility }) => {
  const onClick = () => {
    isVisible ? setVisibility(false) : setVisibility(true);
  };
  return (
    <div className="sidebar-button" onClick={onClick}>
      <i className="fas fa-lg fa-search-location"></i>
    </div>
  );
};

export default SideBarButton;
