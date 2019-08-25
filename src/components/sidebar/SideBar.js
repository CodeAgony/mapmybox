import React, { useContext } from 'react';
import Search from './Search';
import OutputItem from './OutputItem';

import AppContext from '../../context/appContext';

const SideBar = () => {
  const appContext = useContext(AppContext);
  const { isVisible, places } = appContext;

  return (
    <div className={isVisible ? 'sidebar sidebar-visible' : 'sidebar'}>
      <h3>Vinnytsia</h3>
      <Search />
      {places !== null &&
        places.features.map(feature => (
          <OutputItem feature={feature} key={feature.id} name={feature.text} />
        ))}
    </div>
  );
};

export default SideBar;
