# Custom Agents Configuration for Antigravity

Este espacio de trabajo contiene la configuración del **Stack de Agentes para AI Video Revolution (100 Days Challenge)** y producción de contenido multimedia de alto engagement.

> 📌 **RESUMEN MAESTRO DEL DESAFÍO**: Consulta siempre [`CHALLENGE_SUMMARY.md`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/CHALLENGE_SUMMARY.md) para conocer el estado actual del reto, el día en que vamos, las reglas de personajes maestros y el historial de videos.

---

## 🎬 1. Stack de Agentes de Video (AI Video Pipeline)

1. **video-context-ideator**: Agente de ideación rápida que genera conceptos cortos, ganchos de 1 línea y premisas de video sin desgloses de tiempo ni complejidades innecesarias.
2. **video-scene-specifier**: Agente especificador que desglosa el concepto en escenas modulares de 10 segundos integradas con el formato de prompt cinematográfico de Google Omni y el Voiceover de los personajes.
3. **video-scene-builder**: Agente constructor visual que genera las imágenes y keyframes para cada escena usando `generate_image` con la fórmula de 6 capas cinematográficas y consistencia visual de personajes.
4. **video-master-prompter**: Agente máster de prompts que traduce la idea, escenas e imágenes en prompts cinemáticos optimizados para generadores de video de IA (Google Omni/Veo, Runway Gen-3, Kling 1.5, Sora).
5. **video-motion-graphics**: Agente especialista en motion graphics, animaciones tipográficas, lower thirds, overlays dinámicos, interfaces HUD y código Remotion (React) para potenciar la retención visual.

---

## 📱 2. Stack de Agentes de Social Media & Carruseles

6. **social-media-carousel-designer**: Agente especialista en conceptualizar, diseñar y exportar carruseles editoriales de alto impacto (1080×1350px, 4:5) para Instagram y LinkedIn.
   - **Fondos Full-Bleed**: Utiliza imágenes de alta resolución como fondos de pantalla completos con gradientes cinemáticos oscuros y estética Dark Luxury Glassmorphism.
   - **Workflow de Copy Modular en JS**: Todo el contenido, titulares, métricas y llamados a la acción se administran en `src/carousel.config.js` para una edición rápida y sin fricción de código HTML.
   - **Render Automatizado**: Genera PNGs individuales (2x Retina) y el documento PDF deslizable para LinkedIn mediante Playwright (`node render.mjs`).

---

## 🛠️ 3. Agentes del Sistema & Soporte

* **agent-creator**: Agente especializado en crear, configurar y personalizar nuevos agentes y skills en Antigravity.
* **code-reviewer**: Agente especializado en auditoría, buenas prácticas y aseguramiento de calidad de código.

---

## 📐 Convenciones y Personajes Maestros

* **Vector**: Miniature Schnauzer gris/negro con chaleco de mezclilla vintage y gafas de sol oscuras (Co-piloto y tech icon).
* **Idioma de Producción**: Contenido y videos en **Inglés**; interacción y soporte con el usuario en **Español**.
* **Motor de Video por Defecto (Google Omni Only)**: Si el usuario no pide explícitamente una herramienta de video de IA específica (ej. Runway, Kling, Sora), **asumir SIEMPRE y ÚNICAMENTE Google Omni**. No generar prompts para múltiples herramientas a menos que sea solicitado.
* **Flujo de Trabajo (Storyboard Primero & Diálogo)**: Partir siempre por el desglose del **storyboard** y dialogar/co-diseñar con el usuario las opciones narrativas y ritmos cómicos antes de redactar prompts finales o dar por cerrado el video.
* **Sincronización Post-Render (Auditoría de Speech)**: Cada vez que el usuario renderice el video final de un día (`Rendered/Day X.mp4`), el agente debe inspeccionar el video, transcribir el audio real generado (con Whisper o ffmpeg), actualizar `video_production.md` y guardar las prompts definitivas sincronizadas en `100 days Challenge/Day X/prompts/<vidname>.md` (ej. `Day 7/prompts/day 7.md`).

---

## 📸 Regla Obligatoria de Consistencia de Personajes y Referencias (`assets/`)

> ⚠️ **REGLA ESTRICTA ANTES DE GENERAR CUALQUIER ASSET**:
> Antes de generar cualquier imagen, keyframe, escena o slide de carrusel, **SIEMPRE debes inspeccionar la carpeta [`assets/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/assets)** para cargar el contexto visual exacto:
> 
> 1. **Digital Twin**: Archivos en [`assets/Digital Twin/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/assets/Digital%20Twin) (Director hispano/latino, cabello ondulado oscuro a los hombros, barba/stubble corta, chaqueta técnica gris/oscura).
> 2. **Vector**: Archivos en [`assets/Vector/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/assets/Vector) (Miniature Schnauzer gris/negro, chaleco de mezclilla vintage con cuello y botones de bronce, gafas de sol oscuras).
> 3. **Logos & Branding**: Archivos en [`assets/Ai Video Revolution Logo/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/assets/Ai%20Video%20Revolution%20Logo).
> 
> Al invocar `generate_image`, **SIEMPRE incluye las rutas absolutas de estas imágenes en el parámetro `ImagePaths`** (hasta 3 referencias) para anclar la identidad visual y garantizar 100% de consistencia sin variaciones accidentales de personaje.

