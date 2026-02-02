import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';

import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import MarcadorScreen from './screens/MarcadorScreen';
import BookingScreen from './screens/BookingScreen';
import HistorialScreen from './screens/HistorialScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const showBottomNav = location.pathname.startsWith('/app');

  return (
    <>
      <main className="app-shell">
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/registro" element={<RegisterScreen />} />
          <Route path="/app">
            <Route index element={<Navigate to="marcador" replace />} />
            <Route path="marcador" element={<MarcadorScreen />} />
            <Route path="reservas" element={<BookingScreen />} />
            <Route path="historial" element={<HistorialScreen />} />
            <Route path="perfil" element={<ProfileScreen />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {showBottomNav && <BottomNav />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
