# 🏆 100 Days Challenge: AI Video Revolution — Master Summary & State

> **INSTRUCCIÓN PARA EL AGENTE**: Lee este archivo al inicio de cada nueva sesión para conocer el estado exacto del desafío, las reglas de marca, los personajes maestros, el stack técnico y el historial día por día.

---

## 📍 1. Estado Actual del Desafío
- **Estado Global**: Días 3, 4 y 6 completados y renderizados. Días en buffer listos para publicar a partir del **Día 10**.
- **Video Anclado Maestro (Pinned Post)**: **Día 0 (The Master Trailer)** diseñado con prompts y keyframes en [`100 days Challenge/Day 0/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/100%20days%20Challenge/Day%200).
- **Fase de Historia Activa**: *Construcción del Portafolio de 3 Nichos y Lanzamiento de Propuestas en Upwork ($0 a $10k/mes MRR)*.

---

## 👥 2. Personajes Maestros (Master Characters & References)
1. **Vector**: Perro Schnauzer miniatura cool con chaleco de mezclilla (*denim vest*) vintage azul y lentes de sol oscuros. Referencias en [`assets/Vector/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/assets/Vector).
2. **Digital Twin**: Gemelo digital IA del creador (director/filmmaker hispano, cabello ondulado oscuro a los hombros, chaqueta técnica oscura). Referencias en [`assets/Digital Twin/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/assets/Digital%20Twin).

> ⚠️ **REGLA ESTRICTA DE IMÁGENES Y PROMPTING**:
> - **Generación de Imágenes (`generate_image`)**: **SIEMPRE inspeccionar [`assets/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/assets)** y pasar las fotos de referencia en `ImagePaths` para mantener la identidad visual exacta sin desviaciones.
> - **Prompts de Video en Google Omni**: Los personajes ya están anclados. Nombrarlos exclusivamente como **Vector** y **Digital Twin** sin sobre-describir su ropa o raza en el texto del video.

---

## ⚙️ 3. Reglas de Contenido y Workflow de Agentes

1. **Idioma**: **100% Inglés (English)** para Voiceover, subtítulos y prompts.
2. **Motor de Video**: **Google Omni / Google Veo por defecto**. Solo generar para otros motores (Runway, Kling, Sora) si el usuario lo solicita explícitamente.
3. **Flujo de Creación**: Partir siempre por el **Storyboard** y abrir diálogo colaborativo con el usuario antes de dar por cerrado el video o generar prompts finales.
4. **Generaciones de Video**: Cada generación individual de IA dura **10 segundos exactos**. Los videos completos se forman encadenando múltiples generaciones de 10s (ej. 3x 10s = 30s).
5. **Estructura del Desglose de Escena (`video-scene-specifier`)**:
   - **Visual Prompt**: Formato de prosa cinematográfica continua de **Google Omni / Google Veo** (lente 35mm f/1.8, 9:16 vertical, trayectoria de cámara fluida, iluminación volumétrica).
   - **Voiceover sincronizado**: Con etiquetas explícitas del personaje que habla (`Digital Twin:` o `Vector:`).
4. **Ideación Ligera (`video-context-ideator`)**:
   - Solo conceptos cortos y ganchos de 1 línea, sin timestamps ni divisiones de tiempo complejas.
5. **Motion Graphics (`video-motion-graphics` & Remotion)**:
   - Estilo: *Dark Luxury Glassmorphism & Liquid Meters 3D* (Obsidiana, bordes dorados, tubos de líquido fluorescente en Verde Esmeralda, Cian, Ámbar y Púrpura).
   - Arquitectura de 5 capas: `BgMesh` ➔ Contenido ➔ `Grade` ➔ `Grain` ➔ `Vignette`.
   - Single source of truth en [`src/theme.ts`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/src/theme.ts).

---

## 📅 4. Registro Histórico Día por Día

### 🔹 Día 0: *The Master Trailer & Pinned Challenge Video (START HERE)*
- **Premisa**: Video anclado permanente para perfiles sociales. Plantea el reto de construir un estudio de video con IA de $0 a $10,000/mes de ingresos recurrentes (MRR) en 100 días consecutivos, sin seguidores iniciales y reinvirtiendo el 100% de los fondos de clientes en cómputo y escala.
- **Ubicación & Assets**: [`100 days Challenge/Day 0/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/100%20days%20Challenge/Day%200) — Master Keyframe en [`assets/day0_00_master_keyframe.jpg`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/100%20days%20Challenge/Day%200/assets/day0_00_master_keyframe.jpg) y prompts en [`video_production.md`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/100%20days%20Challenge/Day%200/video_production.md).
- **Duración**: 30s (3 generaciones de 10s en Google Omni). **Estado: GUION, ASSETS & PROMPTS LISTOS**.

### 🔹 Día 1 - 2: Fundamentos y Setup
- Inicio del desafío de 100 días y configuración del stack de agentes de IA de video.

### 🔹 Día 3: *The Algorithm's Demand & The Co-Star Contract*
- **Premisa**: Vector toma la cámara para quejarse de la incompetencia de su co-star y revela que habló con "management" (el algoritmo). Cierran con paw-bump asegurando que el perro manda en el estudio.
- **Ubicación & Render**: [`100 days Challenge/Day 3/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/100%20days%20Challenge/Day%203) — Archivo final en [`Rendered/Day 3.mp4`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/100%20days%20Challenge/Day%203/Rendered/Day%203.mp4).
- **Duración**: 30s. **Estado: COMPLETADO & RENDERIZADO**.

### 🔹 Día 4: *The Monetization Mandate — Video Portfolio & The Upwork Hunt*
- **Premisa**: Vector exige monetizar: los likes no pagan GPUs ni comida gourmet. Fijan la meta de $10k/mes y arman portafolio para Upwork.
- **Ubicación & Render**: [`100 days Challenge/Day 4/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/100%20days%20Challenge/Day%204) — Archivo final en [`Rendered/Day 4.mp4`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/100%20days%20Challenge/Day%204/Rendered/Day%204.mp4).
- **Duración**: 30s. **Estado: COMPLETADO & RENDERIZADO**.

### 🔹 Día 5: *The Upwork Hunt — AI E-Commerce & UGC Niche Discovery*
- **Premisa**: Abren Upwork, descubren la alta demanda en videos de E-commerce y anuncios UGC con IA, y enfocan allí el portafolio comercial.
- **Ubicación**: [`100 days Challenge/Day 5/video_production.md`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/100%20days%20Challenge/Day%205/video_production.md).
- **Duración**: 30s. **Estado: GUION & PROMPTS LISTOS**.

### 🔹 Día 6: *The AI UGC Portfolio Strategy & The 3D Hologram Call (+ LUMEN Ad)*
- **Premisa**: Anuncian la estrategia de portafolio, activan el proyector holográfico 3D y contratan a Sofia Reynolds. Producen además el comercial orgánico completo de LUMEN Pure Peptide Eye Melt.
- **Ubicación & Renders**: [`100 days Challenge/Day 6/Rendered/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/100%20days%20Challenge/Day%206/Rendered)
  - `Day 6.mp4` (Episodio de agencia y llamada holográfica - 37s).
  - `Day 6 ecomm Portfolio.mp4` (Comercial UGC de Sofia para LUMEN - 42s).
- **Estado: AMBOS COMPLETADOS & RENDERIZADOS**.

---

### 🔹 Día 7: *The Delivery & The 3-Pillar Portfolio Expansion (The Pet Care Mandate)*
- **Premisa**: Revisan la entrega de Sofia (LUMEN), celebran la calidad hiperrealista, pero Vector exige diversificar el portafolio en 3 pilares comerciales clave antes de salir a Upwork: **Beauty & Skincare**, **Pet Care & Nutrition** (la prioridad estratégica de Vector: mercado de $80B) y **Performance Wellness**.
- **Ubicación**: [`100 days Challenge/Day 7/video_production.md`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/100%20days%20Challenge/Day%207/video_production.md).
- **Duración**: 30s. **Estado: GUION & PROMPTS LISTOS**.

---

## 🎯 5. Próximos Pasos (Día 8)
- **Día 8**: *Unleashing the Upwork Proposals* — Con el portafolio maduro de 3 pilares (Beauty, Pet Care, Wellness), envían sus primeras 3 propuestas de alto ticket ($3,500/mes) a marcas reales en Upwork.


