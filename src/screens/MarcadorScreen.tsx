import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartoonBackground } from '../components/CartoonBackground';
import { CartoonCard } from '../components/CartoonCard';
import { CartoonButton } from '../components/CartoonButton';
import { CartoonTheme as T } from '../theme/cartoonTheme';
// import { useFeedback } from '../hooks/useFeedback'; // Pending migration
import { StorageService } from '../services/StorageService';
import './MarcadorScreen.css';

const MarcadorScreen = () => {
  const navigate = useNavigate();
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [animatingA, setAnimatingA] = useState(false);
  const [animatingB, setAnimatingB] = useState(false);
  const [playerAName, setPlayerAName] = useState('Jugador 1');
  const [playerBName, setPlayerBName] = useState('Jugador 2');

  const triggerAnimation = (player: 'A' | 'B') => {
    if (player === 'A') {
      setAnimatingA(true);
      setTimeout(() => setAnimatingA(false), 300);
    } else {
      setAnimatingB(true);
      setTimeout(() => setAnimatingB(false), 300);
    }
  };

  const incrementScore = (player: 'A' | 'B') => {
    // feedback.success(); 
    if (player === 'A') {
      setScoreA(prev => prev + 1);
      triggerAnimation('A');
    } else {
      setScoreB(prev => prev + 1);
      triggerAnimation('B');
    }
  };

  const decrementScore = (player: 'A' | 'B') => {
    // feedback.light();
    if (player === 'A') setScoreA(prev => Math.max(0, prev - 1));
    else setScoreB(prev => Math.max(0, prev - 1));
  };

  const resetMatch = () => {
    // feedback.medium();
    setScoreA(0);
    setScoreB(0);
  };

  const handleSaveMatch = async () => {
    if (scoreA === 0 && scoreB === 0) {
      // feedback.error();
      alert('¡Ups! No puedes guardar un partido sin puntos. ¡A jugar! 🎾');
      return;
    }

    const normalizedPlayerA = playerAName.trim() || 'Jugador 1';
    const normalizedPlayerB = playerBName.trim() || 'Jugador 2';
    const winner = scoreA > scoreB ? normalizedPlayerA : scoreA < scoreB ? normalizedPlayerB : 'Empate';

    try {
      await StorageService.saveMatch({
        winner,
        score: `${scoreA} - ${scoreB}`,
        player1Name: normalizedPlayerA,
        player2Name: normalizedPlayerB,
      });
      // feedback.success();
      if (window.confirm('¡Genial! ✨ Tu partido ha sido guardado. ¿Quieres reiniciar el tablero?')) {
        resetMatch();
      }
      navigate('/app/historial');
    } catch (error) {
      console.error('match.save.failed', error);
      alert('Hubo un problema al guardar el partido.');
    }
  };

  return (
    <CartoonBackground>
      <div className="marcador-header">
        <h1 className="marcador-title">Marcador de Pádel 🎾</h1>
      </div>

      <div className="players-container">
        {/* Jugador 1 */}
        <CartoonCard className="player-card">
          <input
            className="player-input"
            value={playerAName}
            onChange={(event) => setPlayerAName(event.target.value)}
            placeholder="Nombre jugador 1"
          />
          <div className={`score-text ${animatingA ? 'score-bump' : ''}`}>
            {scoreA}
          </div>
          <div className="controls">
            <CartoonButton
              title="-"
              onPress={() => decrementScore('A')}
              variant="danger"
              className="circle-btn"
              style={{ width: '60px', height: '60px', borderRadius: '30px', padding: 0 }}
            />
            <CartoonButton
              title="+"
              onPress={() => incrementScore('A')}
              variant="green"
              className="circle-btn"
              style={{ width: '60px', height: '60px', borderRadius: '30px', padding: 0 }}
            />
          </div>
        </CartoonCard>

        {/* Jugador 2 */}
        <CartoonCard className="player-card">
          <input
            className="player-input"
            value={playerBName}
            onChange={(event) => setPlayerBName(event.target.value)}
            placeholder="Nombre jugador 2"
          />
          <div className={`score-text ${animatingB ? 'score-bump' : ''}`}>
            {scoreB}
          </div>
          <div className="controls">
            <CartoonButton
              title="-"
              onPress={() => decrementScore('B')}
              variant="danger"
              className="circle-btn"
              style={{ width: '60px', height: '60px', borderRadius: '30px', padding: 0 }}
            />
            <CartoonButton
              title="+"
              onPress={() => incrementScore('B')}
              variant="blue"
              className="circle-btn"
              style={{ width: '60px', height: '60px', borderRadius: '30px', padding: 0 }}
            />
          </div>
        </CartoonCard>
      </div>

      <div className="marcador-footer">
        <CartoonButton
          title="FINALIZAR PARTIDO"
          leftEmoji="🏁"
          variant="green"
          onPress={handleSaveMatch}
        />
        <div style={{ marginTop: '12px' }}>
          <CartoonButton
            title="Reiniciar Tablero"
            leftEmoji="🔄"
            variant="ghost"
            onPress={resetMatch}
          />
        </div>
      </div>
    </CartoonBackground>
  );
};

export default MarcadorScreen;
