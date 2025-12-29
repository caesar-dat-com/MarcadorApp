import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';

interface GlassContainerProps {
    children?: React.ReactNode;
    style?: ViewStyle;
    intensity?: number;
    size?: 'small' | 'medium' | 'large';
    rounded?: boolean;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
    children,
    style,
    intensity = 30, // Default intensity
    size = 'large',
    rounded = true
}) => {
    return (
        <View style={[
            styles.container,
            rounded && styles.rounded,
            styles[size],
            style
        ]}>
            {/* 1. Backdrop Filter / Blur */}
            {/* Note: On Android, BlurView requires the underlying view to be rendered. 
          Assuming this sits on top of LiquidBackground. */}
            <BlurView
                style={StyleSheet.absoluteFill}
                blurType="light"
                blurAmount={10}
                reducedTransparencyFallbackColor="white"
            />

            {/* 2. Glass Overlay (Tint) */}
            <View style={[StyleSheet.absoluteFill, styles.tint]} />

            {/* 3. Specular Highlight (Border/Glow) */}
            <LinearGradient
                colors={['rgba(255,255,255,0.75)', 'rgba(255,255,255,0.1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[StyleSheet.absoluteFill, styles.borderGradient]}
                pointerEvents="none"
            />

            {/* 4. Content */}
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: 'transparent',
        // Shadow for depth
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5, // Android shadow
    },
    rounded: {
        borderRadius: 30,
    },
    large: {
        minHeight: 200,
        width: '100%',
    },
    medium: {
        minHeight: 150,
        flex: 1,
    },
    small: {
        minHeight: 100,
        minWidth: 100,
    },
    tint: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle white tint
        zIndex: 1,
    },
    borderGradient: {
        zIndex: 2,
        borderWidth: 1.5,
        borderColor: 'transparent', // Gradient handles visual border
        borderRadius: 30, // Match container
        opacity: 0.5
    },
    content: {
        zIndex: 3,
        padding: 20,
        flex: 1,
        // Align items/justify content can be handled by children or passed style
    }
});

export default GlassContainer;
