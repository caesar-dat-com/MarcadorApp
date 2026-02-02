import React from 'react';
import { Link } from 'react-router-dom';
import { CartoonBackground } from '../components/CartoonBackground';
import { CartoonButton } from '../components/CartoonButton';
import { CartoonCard } from '../components/CartoonCard';
import './AuthScreen.css';

const LoginScreen = () => {
  return (
    <CartoonBackground>
      <div className="auth-screen">
        <CartoonCard className="auth-card">
          <h1 className="auth-title">Iniciar sesión</h1>
          <p className="auth-subtitle">Accede para guardar tus resultados y reservas.</p>

          <label className="auth-label">
            Correo electrónico
            <input className="auth-input" type="email" placeholder="tu@email.com" />
          </label>

          <label className="auth-label">
            Contraseña
            <input className="auth-input" type="password" placeholder="••••••••" />
          </label>

          <CartoonButton title="Entrar" variant="green" />
          <button className="auth-link">¿Olvidaste tu contraseña?</button>
        </CartoonCard>

        <div className="auth-footer">
          <span>¿No tienes cuenta?</span>
          <Link to="/registro" className="auth-link-inline">Crear cuenta</Link>
        </div>
      </div>
    </CartoonBackground>
  );
};

export default LoginScreen;
