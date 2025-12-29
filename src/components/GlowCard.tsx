import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useDerivedValue,
    interpolateColor
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

interface GlowCardProps {
    children?: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, title, icon }) => {
    const x = useSharedValue(0);
    const y = useSharedValue(0);
    const opacity = useSharedValue(0);

    const gesture = Gesture.Pan()
        .onBegin((e) => {
            x.value = e.x;
            y.value = e.y;
            opacity.value = withSpring(1);
        })
        .onUpdate((e) => {
            x.value = e.x;
            y.value = e.y;
        })
        .onFinalize(() => {
            opacity.value = withSpring(0);
        });

    // Animated style for the glow center
    const glowStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                { translateX: x.value - 100 }, // Center the glow (assuming 200px size)
                { translateY: y.value - 100 },
            ],
        };
    });

    return (
        <GestureDetector gesture={gesture}>
            <View style={styles.cardContainer}>
                {/* Glow Layer */}
                <Animated.View style={[styles.glow, glowStyle]}>
                    <LinearGradient
                        colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0)']}
                        style={styles.gradient}
                    />
                </Animated.View>

                {/* Content */}
                <View style={styles.content}>
                    {icon && <View style={styles.iconContainer}>{icon}</View>}
                    {title && <Text style={styles.title}>{title}</Text>}
                    {children}
                </View>

                {/* Border Overlay (Optional, for glass look) */}
                <View style={styles.borderOverlay} pointerEvents="none" />
            </View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: 150,
        height: 180,
        backgroundColor: 'rgba(25, 25, 30, 0.6)',
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    glow: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 100,
        zIndex: 1,
    },
    gradient: {
        flex: 1,
        borderRadius: 100,
    },
    content: {
        zIndex: 2,
        alignItems: 'center',
        padding: 16,
    },
    iconContainer: {
        marginBottom: 12,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    borderOverlay: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        zIndex: 3,
    }
});

export default GlowCard;
