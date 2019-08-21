import React from 'react';
import Search from './Search';
import OutputItem from './OutputItem';

const SideBar = props => {
  return (
    <div className={props.isVisible ? 'sidebar sidebar-visible' : 'sidebar'}>
      <h3>Vinnytsia</h3>
      <Search />
      <OutputItem />
      <OutputItem />
      <OutputItem />
      <OutputItem />
      <OutputItem />
      <OutputItem />
      <OutputItem />
      <OutputItem />
      <OutputItem />
      <OutputItem />
    </div>
  );
};

export default SideBar;
