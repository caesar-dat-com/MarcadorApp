import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

interface GlassContainerProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    intensity?: number;
    size?: 'small' | 'medium' | 'large';
    rounded?: boolean;
}

export const GlassContainer: React.FC<GlassContainerProps> = ({
    children,
    style,
    intensity = 30, // Kept for API compatibility, though unused now for blur
    size = 'medium',
    rounded = true,
}) => {
    // Size logic
    let containerWidth: number | string = '100%';
    let containerPadding = 20;

    switch (size) {
        case 'small':
            containerWidth = width * 0.4;
            containerPadding = 15;
            break;
        case 'medium':
            containerWidth = width * 0.85;
            containerPadding = 20;
            break;
        case 'large':
            containerWidth = width * 0.95;
            containerPadding = 25;
            break;
    }

    return (
        <View
            style={[
                styles.container,
                {
                    width: containerWidth,
                    padding: containerPadding,
                    borderRadius: rounded ? 24 : 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fallback for Blur
                },
                style,
            ]}
        >
            {/* Gradient Border/Highlight - Subtle shine */}
            <LinearGradient
                colors={[
                    'rgba(255, 255, 255, 0.3)',
                    'rgba(255, 255, 255, 0.05)',
                    'rgba(255, 255, 255, 0.0)',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.borderGradient, { borderRadius: rounded ? 24 : 0 }]}
                pointerEvents="none"
            />

            {/* Inner Content */}
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        // Shadow for depth
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
