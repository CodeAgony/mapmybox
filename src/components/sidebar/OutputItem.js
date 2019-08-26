import React, { useContext } from 'react';
import AppContext from '../../context/appContext';

const OutputItem = ({ place }) => {
  const appContext = useContext(AppContext);
  const { setPopup } = appContext;

  const handleClick = () => {
    setPopup(place);
  };

  return (
    <p className="output-item" onClick={handleClick}>
      {place.text}
    </p>
  );
};

export default OutputItem;
