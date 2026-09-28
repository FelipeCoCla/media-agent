/**
 * ═══════════════════════════════════════════════════════════════════════════
 * 🎬 CAROUSEL CONTENT CONFIGURATION (AI Video Revolution)
 * ═══════════════════════════════════════════════════════════════════════════
 * Edita aquí el copy de cada slide. 
 * Cualquier cambio en este archivo actualizará automáticamente el carrusel,
 * los PNGs de alta resolución (1080x1350) y el PDF para LinkedIn.
 */

export const carouselConfig = {
  // Configuración Global y Branding
  meta: {
    author: {
      name: "AI Video Revolution",
      handle: "@aivideorevolution",
      avatar: "../images/slide_1_cover.jpg",
    },
    defaultSeriesTag: "100 DAYS CHALLENGE",
  },

  // Slides del Carrusel
  slides: [
    // ─────────────────────────────────────────────────────────────
    // SLIDE 01: THE COVER / THE HOOK
    // ─────────────────────────────────────────────────────────────
    {
      id: 1,
      type: "cover",
      kicker: "AI VIDEO STUDIO LIFESTYLE",
      seriesTag: "100 DAYS CHALLENGE",
      headline: "How running an <span>AI Video Studio</span> actually changed my life.",
      subtext: "From 14-hour on-set physical grinds to high-leverage creative freedom with Vector.",
      bgImage: "../images/slide_1_cover.jpg",
      bgPosition: "center 20%",
      overlayType: "hero", // 'hero' | 'deep' | 'balanced'
      bottomBadge: "DIGITAL TWIN & VECTOR · PENTHOUSE COMMAND HQ",
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 02: THE CONTRAST (OLD VS NEW)
    // ─────────────────────────────────────────────────────────────
    {
      id: 2,
      type: "contrast",
      kicker: "THE CONTRAST",
      seriesTag: "WORKFLOW EVOLUTION",
      headline: "The bottleneck was never taste. <span>It was physical friction.</span>",
      subtext: "Traditional video production penalized creative ambition with heavy equipment, bloated budgets, and location lock-in.",
      bgImage: "../images/slide_2_old_gear.jpg",
      bgPosition: "center 30%",
      overlayType: "deep",
      contrast: {
        old: {
          tag: "❌ The Old Physical Video Trap",
          title: "Heavy Gear & Production Overhead",
          points: [
            "40-pound camera rigs & 14-hour on-set exhaustion",
            "Bound to specific cities, permits, weather & crew schedules",
            "1 single client revision could take 4 days of reshooting",
          ],
        },
        new: {
          tag: "✅ The AI Video Production OS",
          title: "Infinite Leverage & Total Freedom",
          points: [
            "Modular 10-second cinematic Omni/Veo generations on demand",
            "Zero physical footprint: operate from any café or coastline",
            "Direct iterations in minutes with intelligent agent pipelines",
          ],
        },
      },
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 03: LOCATION FREEDOM (LIFESTYLE PROOF)
    // ─────────────────────────────────────────────────────────────
    {
      id: 3,
      type: "callout",
      kicker: "LOCATION FREEDOM",
      seriesTag: "NOMAD CREATIVE OS",
      headline: "Our whole studio fits in a backpack. <span>Work from anywhere.</span>",
      subtext: "While traditional agencies pack production trucks, Vector and I direct high-budget cinematic spots over iced coffee by the ocean.",
      bgImage: "../images/slide_3_seaside.jpg",
      bgPosition: "center 20%",
      overlayType: "balanced",
      callout: {
        icon: "🌊",
        title: "Mediterranean Coastline · Cloud Rendering Live",
        badgeText: "4K LATENCY: 0s",
      },
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 04: EXPONENTIAL OUTPUT (THE 20-PERSON AGENCY)
    // ─────────────────────────────────────────────────────────────
    {
      id: 4,
      type: "metrics",
      kicker: "EXPONENTIAL OUTPUT",
      seriesTag: "LEVERAGE & SCALE",
      headline: "1 Solo Director + Agent Stack = <span>Output of a 20-Person Agency.</span>",
      subtext: "Automating ideation, scene specifications, and motion graphics turns one creator into a 24/7 media powerhouse.",
      bgImage: "../images/slide_4_studio.jpg",
      bgPosition: "center 25%",
      overlayType: "deep",
      metrics: [
        { val: "2X / DAY", lbl: "Daily Ritual Videos" },
        { val: "10S", lbl: "Modular Veo Blocks" },
        { val: "90%+", lbl: "Studio Profit Margin" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 05: CREATIVE UPGRADE (DIRECTING WORLDS)
    // ─────────────────────────────────────────────────────────────
    {
      id: 5,
      type: "grid",
      kicker: "CREATIVE UPGRADE",
      seriesTag: "WORLDBUILDING",
      headline: "Stop operating equipment. <span>Start directing worlds.</span>",
      subtext: "When generation friction drops to zero, the only moat left is your storytelling, taste, and brand consistency.",
      bgImage: "../images/slide_5_worldbuilding.jpg",
      bgPosition: "center center",
      overlayType: "deep",
      features: [
        {
          num: "01 // VISUAL ANCHORS",
          title: "Consistent Characters",
          desc: "Vector in his denim jacket and Digital Twin anchored across 100+ episodes without drift.",
        },
        {
          num: "02 // AGENT ORCHESTRATION",
          title: "Specialized Stack",
          desc: "Scene specifiers, prompt masters, and builder agents working concurrently in harmony.",
        },
        {
          num: "03 // CODE-DRIVEN MOTION",
          title: "Remotion Engine",
          desc: "Programmatic HUD overlays, 3D fluid gauges, and dynamic typography rendered via code.",
        },
        {
          num: "04 // RAPID REVISIONS",
          title: "Instant Iteration",
          desc: "Adjust lighting, camera trajectories, or color grades with simple prompt tweaks in seconds.",
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 06: TIME ASYMMETRY (PEACE OF MIND)
    // ─────────────────────────────────────────────────────────────
    {
      id: 6,
      type: "callout",
      kicker: "TIME ASYMMETRY",
      seriesTag: "PEACE OF MIND",
      headline: "The true luxury isn't a bigger studio. <span>It's owning your day.</span>",
      subtext: "Cloud batch renders finish while you walk on the beach. You stay in the creative flow without sacrificing your lifestyle.",
      bgImage: "../images/slide_6_sunset.jpg",
      bgPosition: "center 10%",
      overlayType: "balanced",
      callout: {
        icon: "🌅",
        title: "Automated Pipeline: 10/10 Client Deliveries Complete",
        badgeText: "ZERO OVERTIME",
      },
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 07: CALL TO ACTION (THE BLUEPRINT)
    // ─────────────────────────────────────────────────────────────
    {
      id: 7,
      type: "cta",
      kicker: "GET THE SYSTEM",
      seriesTag: "DAY 5 & BEYOND",
      headline: "Ready to build your <span>AI Video Pipeline?</span>",
      subtext: "We documented our entire stack, agent prompts, and the 2-video daily ritual in a comprehensive master blueprint.",
      bgImage: "../images/slide_7_cta.jpg",
      bgPosition: "center 20%",
      overlayType: "deep",
      cta: {
        badge: "HOW TO GET THE BLUEPRINT",
        steps: [
          { num: "1", text: '<strong>Comment "STUDIO"</strong> below on this post.' },
          { num: "2", text: "We'll DM you our complete <strong>Agent Stack & Daily Ritual Blueprint</strong>." },
          { num: "3", text: "Follow <strong>@aivideorevolution</strong> to watch us build the 100 Days in public." },
        ],
        quote: "🐾 Vector approved. Zero fluff, 100% actionable.",
        buttonText: 'COMMENT "STUDIO" ➔',
      },
    },
  ],
};
