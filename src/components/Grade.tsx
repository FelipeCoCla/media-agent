import React from 'react';
import { AbsoluteFill } from 'remotion';
import { theme } from '../theme';

export const Grade: React.FC = () => (
  <AbsoluteFill style={{ pointerEvents: 'none', zIndex: 10 }}>
    <AbsoluteFill
      style={{
        backgroundColor: theme.colors.primary,
        mixBlendMode: 'soft-light',
        opacity: 0.2,
      }}
    />
    <AbsoluteFill
      style={{
        background:
          'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.35) 100%)',
      }}
    />
  </AbsoluteFill>
);
