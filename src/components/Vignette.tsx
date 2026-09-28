import React from 'react';
import { AbsoluteFill } from 'remotion';

export const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%)',
      zIndex: 30,
    }}
  />
);
