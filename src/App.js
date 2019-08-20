import React from 'react';
import MapContainer from './components/map/MapContainer';
import SideBarButton from './components/layout/SideBarButton';

function App() {
  return (
    <div className="App">
      <SideBarButton />
      <MapContainer />
    </div>
  );
}

export default App;
