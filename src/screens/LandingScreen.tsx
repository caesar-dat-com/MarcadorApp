import React from 'react';
import { Link } from 'react-router-dom';
import { CartoonBackground } from '../components/CartoonBackground';
import { CartoonButton } from '../components/CartoonButton';
import { CartoonCard } from '../components/CartoonCard';
import './LandingScreen.css';

const LandingScreen = () => {
  return (
    <CartoonBackground>
      <div className="landing-screen">
        <header className="landing-header">
          <span className="landing-pill">MarcadorApp Pádel</span>
          <h1 className="landing-title">El marcador más simple para tu club y tus partidos</h1>
          <p className="landing-subtitle">
            Lleva resultados, organiza reservas y compite con tus amigos en una experiencia rápida y amigable.
          </p>
        </header>

        <CartoonCard className="landing-card">
          <h2 className="landing-card-title">¿Cómo quieres entrar?</h2>
          <div className="landing-actions">
            <Link to="/login" className="landing-link">
              <CartoonButton title="Soy jugador" variant="green" />
            </Link>
            <Link to="/login" className="landing-link">
              <CartoonButton title="Soy club / empresa" variant="blue" />
            </Link>
          </div>
        </CartoonCard>

        <div className="landing-footer">
          <span className="landing-footer-text">¿Todavía no tienes cuenta?</span>
          <Link to="/registro" className="landing-footer-link">
            Crear cuenta
          </Link>
          <Link to="/app/marcador" className="landing-secondary-link">
            Entrar como invitado
          </Link>
        </div>
      </div>
    </CartoonBackground>
  );
};

export default LandingScreen;
