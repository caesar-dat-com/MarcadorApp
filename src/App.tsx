import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';

// Import Screens (To be migrated)
import MarcadorScreen from './screens/MarcadorScreen';
import BookingScreen from './screens/BookingScreen';
import HistorialScreen from './screens/HistorialScreen';
import ProfileScreen from './screens/ProfileScreen';

const App: React.FC = () => {
  return (
    <Router>
      <main style={{ flex: 1, paddingBottom: '100px', overflowY: 'auto' }}>
        <Routes>
          <Route path="/" element={<MarcadorScreen />} />
          <Route path="/reservas" element={<BookingScreen />} />
          <Route path="/historial" element={<HistorialScreen />} />
          <Route path="/perfil" element={<ProfileScreen />} />
        </Routes>
      </main>
      <BottomNav />
    </Router>
  );
}

export default App;
