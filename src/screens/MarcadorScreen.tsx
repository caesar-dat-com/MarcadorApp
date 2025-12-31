import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Animated, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlassContainer from '../components/GlassContainer'; // Custom Glass Component
import { useFeedback } from '../hooks/useFeedback'; // Haptics + Sound Stub
import { StorageService } from '../services/StorageService';

const MarcadorScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const feedback = useFeedback();

  // Animations (Standard Animated)
  const scaleA = useRef(new Animated.Value(1)).current;
  const scaleB = useRef(new Animated.Value(1)).current;

  const animateScore = (scaleVal) => {
    Animated.sequence([
      Animated.spring(scaleVal, { toValue: 1.5, useNativeDriver: true }),
      Animated.spring(scaleVal, { toValue: 1, useNativeDriver: true })
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
      Alert.alert('Partido Vacío', 'No se puede guardar un partido 0-0 sin jugar.');
      return;
    }

    const winner = scoreA > scoreB ? 'Jugador 1' : scoreA < scoreB ? 'Jugador 2' : 'Empate';

    try {
      const saved = await StorageService.saveMatch({
        winner,
        score: `${scoreA} - ${scoreB}`,
        player1Name: 'Jugador 1',
        player2Name: 'Jugador 2',
      });
      if (!saved) {
        throw new Error('StorageService.saveMatch returned failure');
      }
      feedback.success();
      Alert.alert('¡Guardado!', 'El partido se ha registrado en el historial.', [
        { text: 'OK', onPress: resetMatch }
      ]);
    } catch (error) {
      console.error('match.save.failed', { error, scoreA, scoreB, winner });
      feedback.error();
      Alert.alert('Error', 'Hubo un problema al guardar el partido.');
    }
  };

  const animatedStyleA = { transform: [{ scale: scaleA }] };
  const animatedStyleB = { transform: [{ scale: scaleB }] };

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>MATCH PLAY</Text>
        </View>

        <View style={styles.playersContainer}>
          {/* Jugador 1 */}
          <GlassContainer style={styles.glassCard} intensity={20}>
            <View style={styles.playerContent}>
              <Text style={styles.playerName}>JUGADOR 1</Text>
              <Animated.Text style={[styles.score, animatedStyleA]}>{scoreA}</Animated.Text>
              <View style={styles.controls}>
                <TouchableOpacity style={[styles.circleBtn, styles.btnMinus]} onPress={() => decrementScore('A')}>
                  <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.circleBtn, styles.btnPlus]} onPress={() => incrementScore('A')}>
                  <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </GlassContainer>

          {/* Jugador 2 */}
          <GlassContainer style={styles.glassCard} intensity={20}>
            <View style={styles.playerContent}>
              <Text style={styles.playerName}>JUGADOR 2</Text>
              <Animated.Text style={[styles.score, animatedStyleB]}>{scoreB}</Animated.Text>
              <View style={styles.controls}>
                <TouchableOpacity style={[styles.circleBtn, styles.btnMinus]} onPress={() => decrementScore('B')}>
                  <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.circleBtn, styles.btnPlus]} onPress={() => incrementScore('B')}>
                  <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </GlassContainer>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.mainAction} onPress={handleSaveMatch}>
            <Text style={styles.mainActionText}>FINALIZAR PARTIDO</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetMatch}>
            <Text style={styles.secondaryActionText}>Reiniciar Tablero</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000000', // Fallback color
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Fixed: Transparent to show background image
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerTitle: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  playersContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 20,
  },
  glassCard: {
    flex: 1,
    maxHeight: 280,
    borderRadius: 35,
  },
  playerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  playerName: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  score: {
    color: '#FFFFFF',
    fontSize: 96,
    fontWeight: '200', // Apple Thin style
    marginBottom: 24,
    includeFontPadding: false,
    letterSpacing: -2,
  },
  controls: {
    flexDirection: 'row',
    gap: 24,
  },
  circleBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  btnPlus: {
    backgroundColor: 'rgba(10, 132, 255, 0.2)', // iOS Blue Tint
    borderColor: 'rgba(10, 132, 255, 0.5)',
  },
  btnMinus: {
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  btnText: {
    color: '#fff',
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '200',
  },
  footer: {
    padding: 40,
    paddingBottom: 110,
    gap: 16,
  },
  mainAction: {
    backgroundColor: '#30D158', // iOS Green
    paddingVertical: 18,
    borderRadius: 24, // Softer corners
    alignItems: 'center',
    shadowColor: '#30D158',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  mainActionText: {
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: -0.5,
  },
  secondaryActionText: {
    color: '#FF453A', // iOS Red
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default MarcadorScreen;
