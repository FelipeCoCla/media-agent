import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { theme } from '../theme';

export const BgMesh: React.FC = () => {
  const frame = useCurrentFrame();
  const d1 = Math.sin(frame / 55) * 60;
  const d2 = Math.cos(frame / 70) * 50;

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.bg, overflow: 'hidden' }}>
      {/* Primary Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: 1100,
          height: 1100,
          borderRadius: '50%',
          top: -350 + d1,
          left: -200 + d2,
          filter: 'blur(70px)',
          background: `radial-gradient(circle, ${theme.colors.primary}25, transparent 65%)`,
        }}
      />
      {/* Accent Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: 950,
          height: 950,
          borderRadius: '50%',
          bottom: -300 - d1,
          right: -150 + d2,
          filter: 'blur(80px)',
          background: `radial-gradient(circle, ${theme.colors.accent}20, transparent 65%)`,
        }}
      />
      {/* Success Subtle Center Glow */}
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          top: '30%',
          left: '15%',
          filter: 'blur(90px)',
          background: `radial-gradient(circle, ${theme.colors.success}12, transparent 70%)`,
        }}
      />
    </AbsoluteFill>
  );
};
