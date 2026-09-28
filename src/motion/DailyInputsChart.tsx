import React from 'react';
import { loadFont } from '@remotion/google-fonts/Outfit';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { Entrance } from '../components/Entrance';
import { LiquidCapsule } from '../components/LiquidCapsule';

const { fontFamily } = loadFont();

export interface DailyInputMetrics {
  day: number;
  generations: number;
  posts: number;
  touches: number;
  outreaches: number;
}

const DEFAULT_METRICS: DailyInputMetrics = {
  day: 12,
  generations: 425,
  posts: 118,
  touches: 850,
  outreaches: 320,
};

export const DailyInputsChart: React.FC<{ metrics?: DailyInputMetrics }> = ({
  metrics = DEFAULT_METRICS,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Rule 7: Idle elements breathe
  const breathe = 1 + Math.sin(frame / 26) * 0.01;
  const float = Math.sin(frame / 34) * 3;

  // Rule 4: Exits
  const exitY = interpolate(frame, [durationInFrames - 12, durationInFrames - 2], [0, -35], {
    easing: theme.ease.in,
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const exitOpacity = interpolate(frame, [durationInFrames - 12, durationInFrames - 2], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 45px',
        fontFamily,
      }}
    >
      <Entrance delay={2}>
        <div
          style={{
            width: '100%',
            maxWidth: 960,
            backgroundColor: theme.colors.cardBg,
            backdropFilter: 'blur(24px)',
            border: `1px solid ${theme.colors.cardBorder}`,
            borderRadius: 40,
            padding: 44,
            boxShadow: `0 40px 90px -20px rgba(0, 0, 0, 0.7), 0 0 50px ${theme.colors.goldGlow}`,
            transform: `translateY(${float + exitY}px) scale(${breathe})`,
            opacity: exitOpacity,
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}
        >
          {/* Top Navigation / Branding Bar */}
          <Entrance delay={6}>
            <div
              style={{
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                paddingBottom: 20,
                borderBottom: `1px solid ${theme.colors.cardBorder}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: `linear-gradient(135deg, ${theme.colors.gold} 0%, #9A7B1C 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000000',
                    fontSize: 20,
                    fontWeight: 900,
                    boxShadow: `0 0 20px ${theme.colors.goldGlow}`,
                  }}
                >
                  DV
                </div>
                <div>
                  <h1 style={{ color: theme.colors.text, fontSize: 32, fontWeight: 900, margin: 0 }}>
                    Daily Video Analytics
                  </h1>
                  <div style={{ color: theme.colors.gold, fontSize: 15, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 2 }}>
                    100 Days Challenge • AI Revolution
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.12)',
                  border: `1px solid ${theme.colors.gold}`,
                  padding: '10px 22px',
                  borderRadius: 18,
                  color: theme.colors.gold,
                  fontSize: 22,
                  fontWeight: 900,
                  boxShadow: `0 0 20px ${theme.colors.goldGlow}`,
                }}
              >
                DAY {metrics.day}
              </div>
            </div>
          </Entrance>

          {/* Grid Layout: Structured Cyberpunk Telemetry Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Row 1: Content Performance Card */}
            <Entrance delay={12}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: 28,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ color: theme.colors.text, fontSize: 24, fontWeight: 800, margin: 0 }}>
                    Content Performance
                  </h3>
                  <span style={{ color: theme.colors.primary, fontSize: 15, fontWeight: 700 }}>
                    ● LIVE METRICS
                  </span>
                </div>

                <div style={{ display: 'flex', gap: 20 }}>
                  <LiquidCapsule
                    label="Generations"
                    sublabel="AI Renders"
                    value={metrics.generations}
                    max={500}
                    color={theme.colors.success}
                    delay={16}
                    badgeText="+18%"
                  />
                  <LiquidCapsule
                    label="Posts"
                    sublabel="Published"
                    value={metrics.posts}
                    max={150}
                    color={theme.colors.primary}
                    delay={22}
                    badgeText="+12%"
                  />
                </div>
              </div>
            </Entrance>

            {/* Row 2: User Touchpoints & Outreach Metrics Split */}
            <div style={{ display: 'flex', gap: 24 }}>
              {/* User Touchpoints */}
              <Entrance delay={28} style={{ flex: 1 }}>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: 28,
                    padding: 28,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    height: '100%',
                  }}
                >
                  <h3 style={{ color: theme.colors.text, fontSize: 22, fontWeight: 800, margin: 0 }}>
                    User Touchpoints
                  </h3>
                  <LiquidCapsule
                    label="Touches"
                    sublabel="Interactions"
                    value={metrics.touches}
                    max={1000}
                    color={theme.colors.warning}
                    delay={32}
                    badgeText="+24%"
                  />
                </div>
              </Entrance>

              {/* Outreach Metrics */}
              <Entrance delay={34} style={{ flex: 1 }}>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: 28,
                    padding: 28,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    height: '100%',
                  }}
                >
                  <h3 style={{ color: theme.colors.text, fontSize: 22, fontWeight: 800, margin: 0 }}>
                    Outreach Metrics
                  </h3>
                  <LiquidCapsule
                    label="Outreaches"
                    sublabel="Direct Messages"
                    value={metrics.outreaches}
                    max={500}
                    color={theme.colors.accent}
                    delay={38}
                    badgeText="+15%"
                  />
                </div>
              </Entrance>
            </div>
          </div>

          {/* Footer Summary Tag */}
          <Entrance delay={44}>
            <div
              style={{
                paddingTop: 20,
                borderTop: `1px solid ${theme.colors.cardBorder}`,
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                color: theme.colors.textDim,
                fontSize: 18,
              }}
            >
              <div>
                Total Output:{' '}
                <strong style={{ color: theme.colors.gold }}>
                  {metrics.generations + metrics.posts} assets
                </strong>
              </div>
              <div>
                Efficiency Ratio:{' '}
                <strong style={{ color: theme.colors.primary, fontVariantNumeric: 'tabular-nums' }}>
                  {(metrics.touches / (metrics.outreaches || 1)).toFixed(1)}x
                </strong>
              </div>
            </div>
          </Entrance>
        </div>
      </Entrance>
    </AbsoluteFill>
  );
};
