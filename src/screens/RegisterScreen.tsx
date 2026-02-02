import React from 'react';
import { Link } from 'react-router-dom';
import { CartoonBackground } from '../components/CartoonBackground';
import { CartoonButton } from '../components/CartoonButton';
import { CartoonCard } from '../components/CartoonCard';
import './AuthScreen.css';

const RegisterScreen = () => {
  return (
    <CartoonBackground>
      <div className="auth-screen">
        <CartoonCard className="auth-card">
          <h1 className="auth-title">Crear cuenta</h1>
          <p className="auth-subtitle">Únete para registrar partidos y reservar canchas.</p>

          <label className="auth-label">
            Nombre completo
            <input className="auth-input" type="text" placeholder="Tu nombre" />
          </label>

          <label className="auth-label">
            Correo electrónico
            <input className="auth-input" type="email" placeholder="tu@email.com" />
          </label>

          <label className="auth-label">
            Contraseña
            <input className="auth-input" type="password" placeholder="••••••••" />
          </label>

          <CartoonButton title="Registrarme" variant="blue" />
        </CartoonCard>

        <div className="auth-footer">
          <span>¿Ya tienes cuenta?</span>
          <Link to="/login" className="auth-link-inline">Iniciar sesión</Link>
        </div>
      </div>
    </CartoonBackground>
  );
};

export default RegisterScreen;
