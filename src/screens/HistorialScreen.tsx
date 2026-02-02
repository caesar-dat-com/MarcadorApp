import React, { useState, useEffect } from 'react';
import { StorageService, Match } from '../services/StorageService';
import GlassContainer from '../components/GlassContainer';
import './HistorialScreen.css';

const HistorialScreen = () => {
    const [matches, setMatches] = useState<Match[]>([]);

    const loadHistory = async () => {
        const history = await StorageService.getHistory();
        setMatches(history);
    };

    useEffect(() => {
        loadHistory();
    }, []);

    const handleClearHistory = async () => {
        if (window.confirm('¿Estás seguro de que quieres borrar todos los partidos?')) {
            await StorageService.clearHistory();
            loadHistory();
        }
    };

    return (
        <div className="historial-screen">
            <div className="historial-header">
                <h1 className="historial-header-title">Historial</h1>
                {matches.length > 0 && (
                    <button onClick={handleClearHistory} className="clear-button">
                        Borrar
                    </button>
                )}
            </div>

            <div className="historial-list">
                {matches.length === 0 ? (
                    <div className="empty-container">
                        <p className="empty-text">No hay partidos registrados aún.</p>
                    </div>
                ) : (
                    matches.map((item) => (
                        <GlassContainer key={item.id} className="historial-card" size="large">
                            <div className="historial-card-header">
                                <span className="date">{item.date}</span>
                                <span className="score">{item.score}</span>
                            </div>
                            <p className="winner">Ganador: {item.winner}</p>
                            <p className="match-details">{item.player1Name} vs {item.player2Name}</p>
                        </GlassContainer>
                    ))
                )}
            </div>
        </div>
    );
};

export default HistorialScreen;
