import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

/**
 * GlassContainer (Simulated)
 * Uses high transparency and borders to simulate glass
 * because native Blur is causing build issues.
 */
const GlassContainer = ({ children, style, intensity = 50 }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.glassBackground} />
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'transparent',
    },
    glassBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(35, 35, 35, 0.60)', // Slightly lighter for vibrancy
        borderRadius: 30,
        borderWidth: 0.5, // Hairline border (Apple Style)
        borderColor: 'rgba(255, 255, 255, 0.2)', // Crisp, subtle edge
        // Soft diffused shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 5,
    },
    content: {
        // zIndex: 10, // Removed explicit zIndex to rely on natural stacking context (content is after background)
        flex: 1, // Ensure it takes space
    },
});

export default GlassContainer;
