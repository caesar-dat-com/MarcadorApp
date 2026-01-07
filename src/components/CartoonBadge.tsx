// src/components/CartoonBadge.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CartoonTheme as T } from "../theme/cartoonTheme";

type Tone = "green" | "blue" | "orange" | "red" | "purple" | "gray";

export function CartoonBadge({ text, tone = "gray" }: { text: string; tone?: Tone }) {
    const map = {
        green: T.colors.green,
        blue: T.colors.blue,
        orange: T.colors.orange,
        red: T.colors.red,
        purple: T.colors.purple,
        gray: "#EDEDED",
    } as const;

    const fg = tone === "gray" ? T.colors.text : "#fff";

    return (
        <View style={[styles.badge, { backgroundColor: map[tone] }]}>
            <Text style={[styles.badgeText, { color: fg }]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 999,
        alignSelf: "flex-start",
    },
    badgeText: {
        fontSize: 12,
        fontWeight: "800",
    },
});
