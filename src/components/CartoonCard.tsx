// src/components/CartoonCard.tsx
import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { CartoonTheme as T } from "../theme/cartoonTheme";

export function CartoonCard({
    children,
    style,
}: {
    children: React.ReactNode;
    style?: ViewStyle;
}) {
    return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: T.colors.card,
        borderRadius: T.radius.card,
        borderWidth: 2,
        borderColor: T.colors.border,
        padding: T.spacing.md,

        // sombra tipo “cartoon card”
        shadowColor: "#000",
        shadowOpacity: 0.10,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 3,
    },
});
