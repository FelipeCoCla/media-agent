/**
 * ═══════════════════════════════════════════════════════════════════════════
 * 🎬 CAROUSEL CONTENT CONFIGURATION (AI Video Revolution)
 * ═══════════════════════════════════════════════════════════════════════════
 * Anti-Burnout OS: How 1 Solo Creator & Vector Produce 100+ Pieces of Content
 * 1080x1350px (4:5) Instagram & LinkedIn Editorial Carousel
 */

export const carouselConfig = {
  // Global Metadata & Branding
  meta: {
    author: {
      name: "AI Video Revolution",
      handle: "@aivideorevolution",
      avatar: "../images/slide_1_cover.jpg",
    },
    defaultSeriesTag: "100 DAYS CHALLENGE",
  },

  // Slides List
  slides: [
    // ─────────────────────────────────────────────────────────────
    // SLIDE 01: THE COVER / THE HOOK
    // ─────────────────────────────────────────────────────────────
    {
      id: 1,
      type: "cover",
      kicker: "CREATIVE LEVERAGE & SCALE",
      seriesTag: "100 DAYS CHALLENGE",
      headline: "How 1 Solo Creator & Vector Produce <span>100+ Pieces of Content</span> a Month.",
      subtext: "Burning out on Day 10 isn't a lack of discipline. It's a broken system. Here is our 2-session daily operating ritual.",
      bgImage: "../images/slide_1_cover.jpg",
      bgPosition: "center 20%",
      overlayType: "hero", // 'hero' | 'deep' | 'balanced'
      bottomBadge: "DIGITAL TWIN & VECTOR · PENTHOUSE COMMAND HQ",
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 02: THE 10-DAY TRAP (THE ROOT CAUSE)
    // ─────────────────────────────────────────────────────────────
    {
      id: 2,
      type: "contrast",
      kicker: "THE ROOT CAUSE",
      seriesTag: "THE 10-DAY TRAP",
      headline: "Most creators burn out by Day 10. <span>It’s not lack of discipline.</span>",
      subtext: "Trying to brainstorm, film, edit, and animate daily from scratch is a physical trap. Heroic effort cannot beat a broken workflow.",
      bgImage: "../images/slide_2_burnout.jpg",
      bgPosition: "center 30%",
      overlayType: "deep",
      contrast: {
        old: {
          tag: "❌ The Unstructured Grind",
          title: "Daily Friction & Mental Fatigue",
          points: [
            "Endless blank page syndrome every single morning",
            "Mixing ideation, video editing, and posting into an 8-hour blur",
            "Guaranteed creative exhaustion before reaching week two",
          ],
        },
        new: {
          tag: "✅ The Asynchronous OS",
          title: "Decoupled Focus & High Leverage",
          points: [
            "Dedicated 25-minute morning direction over espresso",
            "Background AI & cloud pipelines doing the heavy lifting",
            "Zero editing fatigue: predictable daily momentum",
          ],
        },
      },
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 03: THE GOLDEN PRINCIPLE (SEPARATION OF POWERS)
    // ─────────────────────────────────────────────────────────────
    {
      id: 3,
      type: "contrast",
      kicker: "THE CORE PRINCIPLE",
      seriesTag: "DECOUPLED FOCUS",
      headline: "Never create and edit in the same headspace. <span>Split your day in two.</span>",
      subtext: "Switching contexts destroys creative flow. We split our entire daily production into two short, non-overlapping rituals.",
      bgImage: "../images/slide_3_split_ritual.jpg",
      bgPosition: "center 25%",
      overlayType: "deep",
      contrast: {
        old: {
          tag: "🌅 08:00 AM · Morning Inputs",
          title: "Pure Creative Direction",
          points: [
            "25 minutes: Ideate hooks & modular 10s scene prompts",
            "Lock character consistency (Vector & Digital Twin)",
            "Queue cloud generation batch — and walk away",
          ],
        },
        new: {
          tag: "🌆 06:00 PM · Evening Outputs",
          title: "Review, Polish & Publish",
          points: [
            "20 minutes: Review completed video renders",
            "Auto-apply Remotion motion graphics & export",
            "Vector paw-bump approval ➔ close laptop and relax",
          ],
        },
      },
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 04: SESSION 1 — MORNING INPUTS (25 MINS)
    // ─────────────────────────────────────────────────────────────
    {
      id: 4,
      type: "callout",
      kicker: "08:00 AM · MORNING DIRECTION",
      seriesTag: "SESSION 1",
      headline: "25 minutes of pure creative direction. <span>Zero editing software.</span>",
      subtext: "Over morning espresso, we direct narrative concepts, specify modular 10-second cinematic Omni/Veo blocks, and anchor keyframes with Vector. Then we let the cloud render.",
      bgImage: "../images/slide_4_morning_inputs.jpg",
      bgPosition: "center 20%",
      overlayType: "balanced",
      callout: {
        icon: "☕",
        title: "Morning Direction Complete · 3x 10s Blocks Queued",
        badgeText: "TIME SPENT: 25 MIN",
      },
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 05: THE MULTIPLICATION ENGINE (1 ➔ 100+)
    // ─────────────────────────────────────────────────────────────
    {
      id: 5,
      type: "grid",
      kicker: "EXPONENTIAL LEVERAGE",
      seriesTag: "CONTENT MULTIPLICATION",
      headline: "1 Master Narrative ➔ <span>Cascades into 5 High-Value Assets.</span>",
      subtext: "We never create single-use content. A single 30-second daily master video automatically multiplies across your entire creative ecosystem.",
      bgImage: "../images/slide_5_repurposing.jpg",
      bgPosition: "center center",
      overlayType: "deep",
      features: [
        {
          num: "01 // CINEMATIC REELS",
          title: "Vertical 9:16 Video",
          desc: "10s modular Veo blocks with synchronized voiceover for Instagram & TikTok.",
        },
        {
          num: "02 // EDITORIAL CAROUSELS",
          title: "High-Res Swipe Decks",
          desc: "1080x1350 multi-page PDF & PNGs for LinkedIn & Instagram feeds.",
        },
        {
          num: "03 // THREADS & BREAKDOWNS",
          title: "Keyframe Breakdowns",
          desc: "High-signal technical posts and story insights extracted from the core narrative.",
        },
        {
          num: "04 // COMMUNITY BLUEPRINTS",
          title: "Behind The Scenes",
          desc: "Production logs, prompt breakdowns, and workflow lessons from the 100 Days Challenge.",
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 06: SESSION 2 — EVENING OUTPUTS (20 MINS)
    // ─────────────────────────────────────────────────────────────
    {
      id: 6,
      type: "callout",
      kicker: "06:00 PM · EVENING HARVEST",
      seriesTag: "SESSION 2",
      headline: "20 minutes to polish, review & publish. <span>Then close the laptop.</span>",
      subtext: "Cloud batch renders are done. Remotion motion graphics are locked. Vector approves the final export with a paw bump. Creative freedom restored.",
      bgImage: "../images/slide_6_evening_outputs.jpg",
      bgPosition: "center 15%",
      overlayType: "balanced",
      callout: {
        icon: "🐾",
        title: "Vector Approved · 2 Daily Videos & Carousel Live",
        badgeText: "ZERO OVERTIME",
      },
    },

    // ─────────────────────────────────────────────────────────────
    // SLIDE 07: THE 100 DAYS JOURNEY (ZERO FLUFF CTA)
    // ─────────────────────────────────────────────────────────────
    {
      id: 7,
      type: "cta",
      kicker: "100 DAYS CHALLENGE",
      seriesTag: "BUILDING IN PUBLIC",
      headline: "We are battle-testing this entire engine <span>live in public.</span>",
      subtext: "We won’t hand out our internal agent code or secret prompts just yet. We’re pushing this system to its limits across 100 consecutive days to prove it never breaks.",
      bgImage: "../images/slide_7_cta.jpg",
      bgPosition: "center center",
      overlayType: "balanced",
      cta: {
        badge: "HOW TO FOLLOW THE JOURNEY",
        steps: [
          { num: "1", text: "Save post" },
          { num: "2", text: "Follow @aivideorevolution" },
          { num: "3", text: "Drop a ⚡ comment" },
        ],
        quote: "🐾 Vector approved. Zero fluff, 100% consistency.",
        buttonText: "FOLLOW @AIVIDEOREVOLUTION ➔",
      },
    },
  ],
};
