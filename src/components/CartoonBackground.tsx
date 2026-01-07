// src/components/CartoonBackground.tsx
import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { CartoonTheme as T } from "../theme/cartoonTheme";

export function CartoonBackground({ children }: { children: React.ReactNode }) {
    return (
        <SafeAreaView style={styles.safe}>
            <LinearGradient
                colors={[T.colors.bg, "#EAF6FF", "#EFFFF3"]}
                style={styles.gradient}
            >
                {/* Blobs decorativos */}
                <View style={[styles.blob, styles.blob1]} />
                <View style={[styles.blob, styles.blob2]} />
                <View style={[styles.blob, styles.blob3]} />

                <View style={styles.content}>{children}</View>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: T.colors.bg },
    gradient: { flex: 1 },
    content: { flex: 1, padding: T.spacing.md },

    blob: {
        position: "absolute",
        borderRadius: 999,
        opacity: 0.35,
    },
    blob1: {
        width: 260,
        height: 260,
        backgroundColor: T.colors.blue,
        top: -80,
        left: -90,
    },
    blob2: {
        width: 220,
        height: 220,
        backgroundColor: T.colors.green,
        bottom: -70,
        right: -80,
    },
    blob3: {
        width: 140,
        height: 140,
        backgroundColor: T.colors.orange,
        top: 160,
        right: -50,
    },
});
