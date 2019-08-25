import React from 'react';
import MapContainer from './components/map/MapContainer';
import SideBarButton from './components/layout/SideBarButton';
import SideBar from './components/sidebar/SideBar';

import AppState from './context/AppState';

function App() {
  return (
    <AppState>
      <div className="App">
        <SideBarButton />
        <SideBar />
        <MapContainer />
      </div>
    </AppState>
  );
}

export default App;
