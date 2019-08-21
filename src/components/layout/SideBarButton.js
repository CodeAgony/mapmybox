import React from 'react';

const SideBarButton = props => {
  const onClick = setVisibility => {
    props.isVisible ? props.setVisibility(false) : props.setVisibility(true);
  };
  return (
    <div className="sidebar-button" onClick={onClick}>
      <i className="fas fa-lg fa-search-location"></i>
    </div>
  );
};

export default SideBarButton;
