import React, { useContext } from 'react';
import AppContext from '../../context/appContext';

const OutputItem = ({ place, name }) => {
  const appContext = useContext(AppContext);
  const { setPopup } = appContext;

  const handleClick = () => {
    setPopup(place);
  };

  return (
    <p className="output-item" onClick={handleClick}>
      {name}
    </p>
  );
};

export default OutputItem;
