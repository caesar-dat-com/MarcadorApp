import React from "react";
import { CartoonTheme as T } from "../theme/cartoonTheme";
import "./CartoonCard.css";

export function CartoonCard({
    children,
    style,
    className = "",
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}) {
    return (
        <div
            className={`cartoon-card ${className}`}
            style={{
                backgroundColor: T.colors.card,
                borderRadius: T.radius.card,
                borderColor: T.colors.border,
                padding: T.spacing.md,
                ...style
            }}
        >
            {children}
        </div>
    );
}
