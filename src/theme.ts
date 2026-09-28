import { Easing } from "remotion";

export const theme = {
  colors: {
    bg: "#070A10",
    bgAlt: "#0E131F",
    primary: "#00F0FF",   // Electric Cyan
    accent: "#E056FD",    // Neon Magenta
    success: "#00E676",   // Liquid Emerald
    warning: "#FFD700",   // Golden Amber
    gold: "#D4AF37",      // Luxury Gold Text/Accents
    goldGlow: "rgba(212, 175, 55, 0.35)",
    text: "#F8FAFC",
    textDim: "#94A3B8",
    cardBg: "rgba(13, 18, 28, 0.88)",
    cardBorder: "rgba(212, 175, 55, 0.22)",
    glowCyan: "rgba(0, 240, 255, 0.35)",
    glowGold: "rgba(255, 215, 0, 0.35)",
  },
  fonts: {
    display: "Outfit",
    body: "Inter",
  },
  ease: {
    out: Easing.bezier(0.16, 1, 0.3, 1),
    inOut: Easing.bezier(0.83, 0, 0.17, 1),
    in: Easing.bezier(0.7, 0, 0.84, 0),
  },
  spring: {
    snappy: { damping: 14, stiffness: 160, mass: 0.6 },
    smooth: { damping: 18, stiffness: 90, mass: 1 },
    bouncy: { damping: 11, stiffness: 170, mass: 0.7 },
  },
} as const;
