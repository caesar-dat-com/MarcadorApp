import React from "react";
import { CartoonTheme as T } from "../theme/cartoonTheme";
import "./CartoonBackground.css";

export function CartoonBackground({ children }: { children: React.ReactNode }) {
    return (
        <div className="cartoon-background">
            <div className="gradient-layer">
                <div className="blob blob1" />
                <div className="blob blob2" />
                <div className="blob blob3" />
                <div className="content-layer">{children}</div>
            </div>
        </div>
    );
}
