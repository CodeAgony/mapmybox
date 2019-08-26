import React, { useContext } from 'react';
import Search from './Search';
import OutputItem from './OutputItem';

import AppContext from '../../context/appContext';

const SideBar = () => {
  const appContext = useContext(AppContext);
  const { isVisible, places, filteredPlaces } = appContext;
  const toRender = () => {
    if ((places !== null) & (!filteredPlaces.length > 0)) {
      return places.map(place => <OutputItem place={place} key={place.id} />);
    } else if (filteredPlaces.length > 0) {
      return filteredPlaces.map(place => (
        <OutputItem place={place} key={place.id} />
      ));
    }
  };

  return (
    <div className={isVisible ? 'sidebar sidebar-visible' : 'sidebar'}>
      <h3>Vinnytsia</h3>
      <Search />
      {toRender()}
    </div>
  );
};

export default SideBar;
