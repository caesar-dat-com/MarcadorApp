import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Alert } from 'react-native';
import { CartoonBackground } from '../components/CartoonBackground';
import { CartoonCard } from '../components/CartoonCard';
import { CartoonButton } from '../components/CartoonButton';
import { CartoonTheme as T } from '../theme/cartoonTheme';
import { useFeedback } from '../hooks/useFeedback';
import { StorageService } from '../services/StorageService';

const MarcadorScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const feedback = useFeedback();

  // Animations
  const scaleA = useRef(new Animated.Value(1)).current;
  const scaleB = useRef(new Animated.Value(1)).current;

  const animateScore = (scaleVal: Animated.Value) => {
    Animated.sequence([
      Animated.spring(scaleVal, { toValue: 1.3, useNativeDriver: true, tension: 100, friction: 3 }),
      Animated.spring(scaleVal, { toValue: 1, useNativeDriver: true, tension: 100, friction: 3 })
    ]).start();
  };

  const incrementScore = (player: 'A' | 'B') => {
    feedback.success();
    if (player === 'A') {
      setScoreA(prev => prev + 1);
      animateScore(scaleA);
    } else {
      setScoreB(prev => prev + 1);
      animateScore(scaleB);
    }
  };

  const decrementScore = (player: 'A' | 'B') => {
    feedback.light();
    if (player === 'A') setScoreA(prev => Math.max(0, prev - 1));
    else setScoreB(prev => Math.max(0, prev - 1));
  };

  const resetMatch = () => {
    feedback.medium();
    setScoreA(0);
    setScoreB(0);
  };

  const handleSaveMatch = async () => {
    if (scoreA === 0 && scoreB === 0) {
      feedback.error();
      Alert.alert('¡Ups!', 'No puedes guardar un partido sin puntos. ¡A jugar! 🎾');
      return;
    }

    const winner = scoreA > scoreB ? 'Jugador 1' : scoreA < scoreB ? 'Jugador 2' : 'Empate';

    try {
      await StorageService.saveMatch({
        winner,
        score: `${scoreA} - ${scoreB}`,
        player1Name: 'Jugador 1',
        player2Name: 'Jugador 2',
      });
      feedback.success();
      Alert.alert('¡Genial! ✨', 'Tu partido ha sido guardado en el historial.', [
        { text: '¡LISTO!', onPress: resetMatch }
      ]);
    } catch (error) {
      feedback.error();
      Alert.alert('Error', 'Hubo un problema al guardar el partido.');
    }
  };

  return (
    <CartoonBackground>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MATCH PLAY 🎾</Text>
      </View>

      <View style={styles.playersContainer}>
        {/* Jugador 1 */}
        <CartoonCard style={styles.playerCard}>
          <Text style={styles.playerLabel}>JUGADOR 1</Text>
          <Animated.Text style={[styles.scoreText, { transform: [{ scale: scaleA }] }]}>
            {scoreA}
          </Animated.Text>
          <View style={styles.controls}>
            <CartoonButton
              title="-"
              onPress={() => decrementScore('A')}
              variant="ghost"
              style={styles.circleBtn}
            />
            <CartoonButton
              title="+"
              onPress={() => incrementScore('A')}
              variant="green"
              style={styles.circleBtn}
            />
          </View>
        </CartoonCard>

        {/* Jugador 2 */}
        <CartoonCard style={styles.playerCard}>
          <Text style={styles.playerLabel}>JUGADOR 2</Text>
          <Animated.Text style={[styles.scoreText, { transform: [{ scale: scaleB }] }]}>
            {scoreB}
          </Animated.Text>
          <View style={styles.controls}>
            <CartoonButton
              title="-"
              onPress={() => decrementScore('B')}
              variant="ghost"
              style={styles.circleBtn}
            />
            <CartoonButton
              title="+"
              onPress={() => incrementScore('B')}
              variant="blue"
              style={styles.circleBtn}
            />
          </View>
        </CartoonCard>
      </View>

      <View style={styles.footer}>
        <CartoonButton
          title="FINALIZAR PARTIDO"
          leftEmoji="🏁"
          variant="green"
          onPress={handleSaveMatch}
        />
        <CartoonButton
          title="Reiniciar Tablero"
          leftEmoji="🔄"
          variant="ghost"
          onPress={resetMatch}
          style={{ marginTop: 12 }}
        />
      </View>
    </CartoonBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: T.spacing.lg,
  },
  headerTitle: {
    color: T.colors.text,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
  },
  playersContainer: {
    flex: 1,
    gap: T.spacing.md,
  },
  playerCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerLabel: {
    color: T.colors.muted,
    fontSize: 14,
    fontWeight: '800',
    marginBottom: T.spacing.xs,
  },
  scoreText: {
    color: T.colors.text,
    fontSize: 80,
    fontWeight: '900',
    marginBottom: T.spacing.md,
  },
  controls: {
    flexDirection: 'row',
    gap: T.spacing.lg,
  },
  circleBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  footer: {
    paddingTop: T.spacing.xl,
    paddingBottom: 100, // Space for tab bar
  },
});

export default MarcadorScreen;
