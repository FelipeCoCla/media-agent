import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';

export interface LiquidCapsuleProps {
  label: string;
  sublabel?: string;
  value: number;
  max: number;
  color: string;
  delay?: number;
  badgeText?: string;
}

export const LiquidCapsule: React.FC<LiquidCapsuleProps> = ({
  label,
  sublabel,
  value,
  max,
  color,
  delay = 0,
  badgeText,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: theme.spring.smooth,
  });

  const fillPct = Math.min(100, (value / max) * 100) * progress;
  const animatedValue = Math.round(value * progress);

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: `1px solid rgba(255, 255, 255, 0.08)`,
        borderRadius: 24,
        padding: '24px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justify: 'space-between',
        gap: 16,
        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Title & Badge */}
      <div style={{ textAlign: 'center', width: '100%' }}>
        <div style={{ color: theme.colors.textDim, fontSize: 16, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
          {label}
        </div>
        {sublabel && (
          <div style={{ color: theme.colors.gold, fontSize: 13, fontWeight: 600, marginTop: 2 }}>
            {sublabel}
          </div>
        )}
      </div>

      {/* 3D Liquid Capsule Tube */}
      <div
        style={{
          width: 64,
          height: 140,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 32,
          border: `2px solid ${color}66`,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: `0 0 20px ${color}33, inset 0 0 10px rgba(0, 0, 0, 0.8)`,
          display: 'flex',
          flexDirection: 'column',
          justify: 'flex-end',
        }}
      >
        {/* Glass Highlight Shine */}
        <div
          style={{
            position: 'absolute',
            top: 6,
            left: 6,
            width: 10,
            height: 128,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
            borderRadius: 8,
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />

        {/* Liquid Fill Level */}
        <div
          style={{
            width: '100%',
            height: `${fillPct}%`,
            background: `linear-gradient(180deg, ${color} 0%, ${color}CC 100%)`,
            borderRadius: '0 0 28px 28px',
            boxShadow: `0 -5px 20px ${color}, inset 0 2px 4px rgba(255, 255, 255, 0.6)`,
            position: 'relative',
            transition: 'height 0.05s ease-out',
          }}
        >
          {/* Surface Glow Bubble */}
          <div
            style={{
              position: 'absolute',
              top: -4,
              left: 0,
              width: '100%',
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              opacity: 0.7,
              filter: 'blur(2px)',
            }}
          />
        </div>
      </div>

      {/* Animated Numeric Value */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            color: color,
            fontSize: 32,
            fontWeight: 900,
            fontVariantNumeric: 'tabular-nums',
            textShadow: `0 0 16px ${color}88`,
          }}
        >
          {animatedValue}
        </div>
        {badgeText && (
          <div
            style={{
              display: 'inline-block',
              fontSize: 13,
              fontWeight: 700,
              color: theme.colors.success,
              backgroundColor: 'rgba(0, 230, 118, 0.12)',
              border: '1px solid rgba(0, 230, 118, 0.3)',
              padding: '2px 8px',
              borderRadius: 10,
              marginTop: 4,
            }}
          >
            {badgeText}
          </div>
        )}
      </div>
    </div>
  );
};
