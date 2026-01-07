import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    withSequence,
    Easing,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

/**
 * OptimizedBackground - Gradiente animado nativo sin WebView
 * Mucho más ligero que LiquidBackground (Three.js en WebView)
 */
const OptimizedBackground = () => {
    const rotation = useSharedValue(0);
    const scale = useSharedValue(1);

    useEffect(() => {
        // Rotación continua muy lenta
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 40000,
                easing: Easing.linear,
            }),
            -1,
            false
        );

        // Efecto de "respiración" en la escala
        scale.value = withRepeat(
            withSequence(
                withTiming(1.1, { duration: 8000, easing: Easing.inOut(Easing.ease) }),
                withTiming(1, { duration: 8000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            false
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { rotate: `${rotation.value}deg` },
                { scale: scale.value },
            ],
        };
    });

    return (
        <>
            {/* Capa base oscura */}
            <Animated.View style={[StyleSheet.absoluteFill, styles.base]} />

            {/* Gradiente animado */}
            <Animated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
                <LinearGradient
                    colors={[
                        '#0a0e27', // Azul marino oscuro
                        '#1a1440', // Púrpura oscuro
                        '#0f1e3a', // Azul medianoche
                        '#0a0e27', // De vuelta al inicio
                    ]}
                    style={StyleSheet.absoluteFill}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                />
            </Animated.View>

            {/* Overlay de gradiente radial (simulado) */}
            <Animated.View style={[StyleSheet.absoluteFill, styles.overlay]} pointerEvents="none">
                <LinearGradient
                    colors={[
                        'rgba(240, 90, 34, 0.15)', // Naranja brillante (del logo)
                        'transparent',
                        'rgba(10, 14, 39, 0.6)',
                    ]}
                    style={StyleSheet.absoluteFill}
                    start={{ x: 0.3, y: 0.2 }}
                    end={{ x: 0.7, y: 0.8 }}
                />
            </Animated.View>
        </>
    );
};

const styles = StyleSheet.create({
    base: {
        backgroundColor: '#0a0e27',
    },
    overlay: {
        opacity: 0.7,
    },
});

export default OptimizedBackground;
