import React, { useContext } from 'react';
import AppContext from '../../context/appContext';

const OutputItem = ({ feature, name }) => {
  const appContext = useContext(AppContext);
  const { setPopup } = appContext;

  const handleClick = () => {
    setPopup(feature);
    console.log(feature);
  };

  return (
    <p className="output-item" onClick={handleClick}>
      {name}
    </p>
  );
};

export default OutputItem;
