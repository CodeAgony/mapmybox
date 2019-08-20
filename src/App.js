import React from 'react';
import MapContainer from './components/map/MapContainer';
import SideBarButton from './components/layout/SideBarButton';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBarButton />
      <SideBar />
      <MapContainer />
    </div>
  );
}

export default App;
