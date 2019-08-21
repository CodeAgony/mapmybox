import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapContainer from './components/map/MapContainer';
import SideBarButton from './components/layout/SideBarButton';
import SideBar from './components/sidebar/SideBar';

function App() {
  const [isVisible, setVisibility] = useState(false);
  const [places, setPlaces] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios(
        'https://api.mapbox.com/geocoding/v5/mapbox.places/restaurant.json?proximity=28.4685,%2049.2344&bbox=27.37442,48.06551,30.023758,49.889038&limit=10&access_token=pk.eyJ1IjoiY29kZWFnb255IiwiYSI6ImNqemg5NHE4dDBiMGczbG16cDhyb3Q1NTYifQ.h_WYdEWMtkuogpC9_l89SQ'
      );

      setPlaces(res.data);
    })();
  }, []);

  return (
    <div className="App">
      <SideBarButton isVisible={isVisible} setVisibility={setVisibility} />
      <SideBar isVisible={isVisible} />
      <MapContainer places={places} />
    </div>
  );
}

export default App;
