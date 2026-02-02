import React from 'react';
import './GlassContainer.css';

interface GlassContainerProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    intensity?: number;
    size?: 'small' | 'medium' | 'large';
    rounded?: boolean;
    className?: string;
}

export const GlassContainer: React.FC<GlassContainerProps> = ({
    children,
    style,
    intensity = 30,
    size = 'medium',
    rounded = true,
    className = "",
}) => {
    return (
        <div
            className={`glass-container size-${size} ${rounded ? 'rounded' : ''} ${className}`}
            style={style}
        >
            <div className="glass-shine" />
            <div className="glass-content">
                {children}
            </div>
        </div>
    );
};

export default GlassContainer;
