// src/components/CartoonButton.tsx
import React, { useMemo } from "react";
import { Pressable, Text, StyleSheet, ViewStyle, View } from "react-native";
import { CartoonTheme as T } from "../theme/cartoonTheme";

type Variant = "green" | "blue" | "orange" | "ghost" | "danger";

export function CartoonButton({
    title,
    onPress,
    variant = "green",
    disabled,
    style,
    leftEmoji,
}: {
    title: string;
    onPress?: () => void;
    variant?: Variant;
    disabled?: boolean;
    style?: ViewStyle;
    leftEmoji?: string;
}) {
    const palette = useMemo(() => {
        if (variant === "blue") return { bg: T.colors.blue, shadow: T.colors.blueDark, text: "#fff" };
        if (variant === "orange") return { bg: T.colors.orange, shadow: "#E09010", text: "#2F2F2F" };
        if (variant === "danger") return { bg: T.colors.red, shadow: "#D63B3B", text: "#fff" };
        if (variant === "ghost") return { bg: "#fff", shadow: T.colors.border, text: T.colors.text, border: true };
        return { bg: T.colors.green, shadow: T.colors.greenDark, text: "#fff" };
    }, [variant]);

    return (
        <Pressable
            onPress={disabled ? undefined : onPress}
            style={({ pressed }) => [
                styles.wrap,
                palette.border && styles.ghost,
                {
                    backgroundColor: palette.bg,
                    borderColor: palette.border ? T.colors.border : "transparent",
                    transform: [{ translateY: pressed ? 3 : 0 }],
                },
                disabled && styles.disabled,
                style,
            ]}
        >
            <Text style={[styles.text, { color: palette.text }]}>
                {leftEmoji ? `${leftEmoji} ` : ""}{title}
            </Text>

            {/* sombra inferior 3D */}
            <View style={[styles.bottomShadow, { backgroundColor: palette.shadow }]} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    wrap: {
        borderRadius: T.radius.button,
        paddingVertical: 14,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        borderWidth: 0,
        overflow: 'visible',
    },
    ghost: { borderWidth: 2, borderBottomWidth: 4 },
    disabled: { opacity: 0.6 },
    text: {
        fontSize: 15,
        fontWeight: "800",
        letterSpacing: 0.4,
        zIndex: 2,
    },
    bottomShadow: {
        position: 'absolute',
        bottom: -4,
        left: 0,
        right: 0,
        height: '100%',
        borderRadius: T.radius.button,
        zIndex: 0,
    }
});
