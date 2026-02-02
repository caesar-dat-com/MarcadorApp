import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
    return (
        <nav className="bottom-nav">
            <div className="glass-background" />
            <div className="nav-items">
                <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span className="icon">🏠</span>
                </NavLink>
                <NavLink to="/reservas" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span className="icon">📅</span>
                </NavLink>
                <NavLink to="/historial" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span className="icon">📜</span>
                </NavLink>
                <NavLink to="/perfil" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span className="icon">👤</span>
                </NavLink>
            </div>
        </nav>
    );
};

export default BottomNav;
