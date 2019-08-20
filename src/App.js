import React, { useState } from 'react';
import MapContainer from './components/map/MapContainer';
import SideBarButton from './components/layout/SideBarButton';
import SideBar from './components/sidebar/SideBar';

function App() {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div className="App">
      <SideBarButton isVisible={isVisible} setVisibility={setVisibility} />
      <SideBar isVisible={isVisible} />
      <MapContainer />
    </div>
  );
}

export default App;
