import React from 'react';
import Search from './Search';
import OutputItem from './OutputItem';

const SideBar = ({ isVisible, places }) => {
  return (
    <div className={isVisible ? 'sidebar sidebar-visible' : 'sidebar'}>
      <h3>Vinnytsia</h3>
      <Search />
      {places !== null &&
        places.features.map(feature => (
          <OutputItem key={feature.id} name={feature.text} />
        ))}
    </div>
  );
};

export default SideBar;
