import React from "react";
import { CartoonTheme as T } from "../theme/cartoonTheme";
import "./CartoonBadge.css";

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
        <div className="cartoon-badge" style={{ backgroundColor: map[tone], color: fg }}>
            <span className="badge-text">{text}</span>
        </div>
    );
}
