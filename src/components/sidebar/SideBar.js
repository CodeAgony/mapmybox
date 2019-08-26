import React, { useContext } from 'react';
import Search from './Search';
import OutputItem from './OutputItem';

import AppContext from '../../context/appContext';

const SideBar = () => {
  const appContext = useContext(AppContext);
  const { isVisible, places, filteredPlaces } = appContext;

  return (
    <div className={isVisible ? 'sidebar sidebar-visible' : 'sidebar'}>
      <h3>Vinnytsia</h3>
      <Search />
      {filteredPlaces === null &&
        places.features.map(place => (
          <OutputItem place={place} key={place.id} />
        ))}
    </div>
  );
};

export default SideBar;
