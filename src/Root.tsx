import React from 'react';
import { Composition } from 'remotion';
import { BgMesh } from './components/BgMesh';
import { Grade } from './components/Grade';
import { Grain } from './components/Grain';
import { Vignette } from './components/Vignette';
import { DailyInputsChart, DailyInputMetrics } from './motion/DailyInputsChart';

const MainComposition: React.FC<{ metrics?: DailyInputMetrics }> = ({ metrics }) => {
  return (
    <>
      {/* Layer 1: Background Mesh with animated radial glowing gradient orbs */}
      <BgMesh />

      {/* Layer 2: Main Scene Content */}
      <DailyInputsChart metrics={metrics} />

      {/* Layer 3: Color Grade Overlay (unifies visual palette) */}
      <Grade />

      {/* Layer 4: Procedural SVG Grain Overlay (film texture) */}
      <Grain />

      {/* Layer 5: Vignette Overlay (focuses audience eye to center) */}
      <Vignette />
    </>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DailyInputsChart"
        component={MainComposition}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          metrics: {
            day: 12,
            generations: 45,
            posts: 12,
            touches: 85,
            outreaches: 30,
          },
        }}
      />
    </>
  );
};
