import React, { useMemo } from "react";
import { CartoonTheme as T } from "../theme/cartoonTheme";
import "./CartoonButton.css";

type Variant = "green" | "blue" | "orange" | "ghost" | "danger";

interface CartoonButtonProps {
    title: string;
    onPress?: () => void;
    variant?: Variant;
    disabled?: boolean;
    style?: React.CSSProperties;
    leftEmoji?: string;
}

export function CartoonButton({
    title,
    onPress,
    variant = "green",
    disabled,
    style,
    leftEmoji,
}: CartoonButtonProps) {
    const palette = useMemo(() => {
        if (variant === "blue") return { bg: T.colors.blue, shadow: T.colors.blueDark, text: "#fff" };
        if (variant === "orange") return { bg: T.colors.orange, shadow: "#E09010", text: "#2F2F2F" };
        if (variant === "danger") return { bg: T.colors.red, shadow: "#D63B3B", text: "#fff" };
        if (variant === "ghost") return { bg: "#fff", shadow: T.colors.border, text: T.colors.text, border: true };
        return { bg: T.colors.green, shadow: T.colors.greenDark, text: "#fff" };
    }, [variant]);

    return (
        <button
            onClick={disabled ? undefined : onPress}
            disabled={disabled}
            className={`cartoon-button-wrap variant-${variant} ${disabled ? 'disabled' : ''}`}
            style={{
                backgroundColor: palette.bg,
                color: palette.text,
                borderColor: palette.border ? T.colors.border : "transparent",
                ...style
            }}
        >
            <span className="button-text">
                {leftEmoji ? `${leftEmoji} ` : ""}{title}
            </span>
            <div className="button-bottom-shadow" style={{ backgroundColor: palette.shadow }} />
        </button>
    );
}
