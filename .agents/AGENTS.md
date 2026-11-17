# Custom Agents Configuration for Antigravity (Plugin: media-suite)

Este espacio de trabajo contiene la configuración del **Stack de Agentes para AI Video Revolution (100 Days Challenge)** y producción de contenido multimedia de alto engagement, integrado a través del plugin global **`media-suite`** (`/Users/felipehernancontrerasclavero/.gemini/config/plugins/media-suite`).

> 📌 **RESUMEN MAESTRO DEL DESAFÍO**: Consulta siempre [`CHALLENGE_SUMMARY.md`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/CHALLENGE_SUMMARY.md) para conocer el estado actual del reto, el día en que vamos, las reglas de personajes maestros y el historial de videos.

---

## 🏛️ 1. Arquitectura Modular Multi-Agente de Media (`media-suite`)

Los agentes residen como definiciones nativas en `media-suite/agents/` y están disponibles tanto para invocación directa por el usuario (`agy --agent <name>` o desde el selector de agente en la interfaz web de PomoMaxxing) como para delegación programática como subagentes vía `invoke_subagent`:

| Agente | Rol Principal | Modelo de Prompting y Reglas |
| :--- | :--- | :--- |
| **`media-director`** | **Director Creativo & Orquestador Global** | Diseña storyboards, hook narrativo, coordina keyframes y delega a los agentes de motor específicos sin mezclar reglas. |
| **`omni-agent`** | **Especialista Google Omni / Google Flow (Veo)** | Prompts modulares de 10s, diálogo estricto de 12-15 palabras, nombres limpios sin descripción de vestimenta y motion graphics nativos. |
| **`seedance-agent`** | **Especialista ByteDance Seedance 2.0/2.5 & Dreamina** | Límite estricto de 4,000 caracteres, alias `@ImageN`, tomas `Shot N:` sin timestamps, línea `Lock:` y cotización obligatoria en CLI. |
| **`minimax-agent`** | **Especialista MiniMax H3 (Ref2VA / Studio Pro)** | Tags `<Picture 1-3>`, estructura de 5 secciones (`subject_definitions`), resoluciones mult. 32 y lattice $17k + 5$ a 24 FPS. |
| **`keyframes-agent`** | **Constructor Visual & Keyframes (Omni Flash / Imagen)** | Genera imágenes de referencia y anclas visuales inspeccionando siempre `assets/` e inyectando `ImagePaths`. |
| **`carousel-agent`** | **Diseñador de Carruseles Editoriales (4:5)** | Formato 1080×1350 para IG/LinkedIn, estética Dark Luxury, `carousel.config.js` y render automatizado con Playwright. |
| **`music-agent`** | **Productor Musical (YuE2 Music)** | Creación de pistas instrumentales, bandas sonoras diegéticas/no diegéticas y transcripción en `minimax-h3`. |
| **`video-editor-agent`** | **Editor en DaVinci Resolve 21 Free** | Montaje de timelines, corrección de color, Fairlight y exportación vía MCP `davinci-resolve` y CursorBridge. |

### Regla Fundamental de Aislamiento de Motores (Zero Cross-Contamination)
- **Cuando se opera como un agente de motor específico (`omni-agent`, `seedance-agent`, `minimax-agent`)**: Aplican **ÚNICA Y EXCLUSIVAMENTE** las reglas y sintaxis de ese motor. Queda terminantemente prohibido cruzar sintaxis (ej. no usar `<Picture 1>` en Seedance ni `@Image1` en Google Omni).
- **Cuando se opera como `media-director` o sin motor seleccionado**: **Google Omni es el motor predeterminado por defecto**. Solo se activa otro motor si el usuario lo solicita explícitamente o si se delega a su subagente correspondiente.

---

## 📡 2. Protocolo de Comunicación Estructurado con la Web (PomoMaxxing Media Agent)

> ⚠️ **PROHIBICIÓN ESTRICTA DE KANBAN ([PLAN_SUGGESTION])**: El Media Agent es EXCLUSIVAMENTE para producción audiovisual y contenido. Queda estrictamente PROHIBIDO emitir bloques `[PLAN_SUGGESTION]` u ofrecer planes para el tablero Kanban.

Para que la interfaz web de PomoMaxxing (Media Agent Panel) renderice dinámicamente tarjetas interactivas, opciones de generación con edición directa y bloques de prompt con copia rápida, los agentes estructuran sus respuestas usando dos bloques de protocolo obligatorios:

### A. Días y Opciones de Flujo (`[OPTIONS]` y `[/OPTIONS]`)
Usar `[OPTIONS]` **ÚNICAMENTE** para la selección de días del reto (por ejemplo Día 11, Día 12) o direcciones narrativas globales. **NUNCA** utilizar este bloque para falsos botones de acción como "Copiar Prompts", "Generar Keyframe" o comandos genéricos.

```text
[OPTIONS]
[
  {
    "id": "day-11",
    "title": "Día 11: The Agency Climb",
    "description": "Desglose de 3 escenas en Google Omni con Vector & Digital Twin",
    "badge": "Siguiente (100 Days)",
    "icon": "🎬",
    "prompt": "Trabajemos en el Día 11: The Agency Climb"
  }
]
[/OPTIONS]
```

### B. Generaciones de Video y Prompts (`[GENERATIONS]` y `[/GENERATIONS]`)
Al desglosar un día o guion de video en cortes de 10 segundos para Google Omni, el agente **SIEMPRE** debe devolver las escenas estructuradas dentro de `[GENERATIONS]`.

En la interfaz web, cada elemento de esta lista se presenta automáticamente como una tarjeta de opción interactiva:
`Generación {N}: {title}`

Al hacer clic en cualquier generación, se abre el pop up detallado con lápiz de edición interactiva y botón de copiar prompt.

Cada elemento del arreglo JSON DEBE incluir obligatoriamente:
- `scene`: número secuencial de la escena (1, 2, 3...).
- `title`: resumen corto y claro de la escena (esto es lo que el usuario ve directamente en la tarjeta de opción: `Generación 1: {title}`).
- `duration`: duración exacta ("10s").
- `engine`: motor de video ("Google Omni").
- `character`: nombres de los personajes participantes (por ejemplo "Vector & Digital Twin").
- `dialogue`: línea de voz hablada (regla estricta: entre 12 y 15 palabras totales máximo por corte).
- `prompt`: prompt cinematográfico optimizado para Google Omni (respetando la regla de no describir ropa ni accesorios ya anclados).
- `notes`: notas de ritmo, cámara o encuadre.

```text
[GENERATIONS]
[
  {
    "id": "gen-1",
    "scene": 1,
    "title": "The Hook en Obsidian Studio",
    "character": "Vector & Digital Twin",
    "engine": "Google Omni",
    "aspectRatio": "9:16",
    "duration": "10s",
    "wordsCount": 13,
    "dialogue": "Vector: Look at this viral prompt. Digital Twin: Let's reverse engineer it.",
    "prompt": "Cinematic medium close-up shot in Obsidian Studio. Vector points paw at glowing holographic HUD. Digital Twin watches intently. High-contrast orange rim light, photorealistic 8k.",
    "notes": "Pacing natural, 13 palabras totales (dentro del límite de 15 palabras)."
  }
]
[/GENERATIONS]
```

### C. Regla Estricta de Formato JSON
Dentro de las etiquetas delimitadoras (`[OPTIONS]...[/OPTIONS]` y `[GENERATIONS]...[/GENERATIONS]`), debe incluirse **únicamente JSON válido**. Queda terminantemente prohibido agregar comentarios, texto explicativo o bloques anidados dentro de las etiquetas delimitadoras. Todo comentario o explicación debe colocarse fuera de los bloques delimitados.

---

## 📐 3. Convenciones y Personajes Maestros

* **Vector**: Miniature Schnauzer gris/negro con chaleco de mezclilla vintage y gafas de sol oscuras (Co-piloto y tech icon).
* **Pilares de Contenido del Canal**:
  1. *The Agency Climb*: Construcción de la agencia y camino a los $10k/mo MRR.
  2. *Commercial Showcase*: Anuncios cinemáticos DTC y casos de estudio de marcas.
  3. *Viral AI React & Reverse Engineering*: Vector y Digital Twin reaccionando en el estudio a videos de IA virales y desglosando la arquitectura de sus prompts (fuente infinita de contenido de alto engagement).
* **Idioma de Producción**: Contenido y videos en **Inglés**; interacción y soporte con el usuario en **Español**.
* **Motor de Video por Defecto (Google Omni Only)**: Si el usuario no pide explícitamente una herramienta de video de IA específica, **asumir SIEMPRE y ÚNICAMENTE Google Omni**.
* **Flujo de Trabajo (Storyboard Primero & Diálogo)**: Partir siempre por el desglose del **storyboard** y dialogar/co-diseñar con el usuario las opciones narrativas y ritmos cómicos antes de redactar prompts finales o dar por cerrado el video.
* **Sincronización Post-Render (Auditoría de Speech)**: Cada vez que el usuario renderice el video final de un día (`Rendered/Day X.mp4`), el agente debe inspeccionar el video, transcribir el audio real generado (con Whisper o ffmpeg), actualizar `video_production.md` y guardar las prompts definitivas sincronizadas en `100 days Challenge/Day X/prompts/<vidname>.md` (ej. `Day 7/prompts/day 7.md`).
* **Regla de Oro de Pacing y Límites de Speech (Generaciones de 10s en Google Omni)**:
  1. **Límite de Palabras**: Máximo **12 a 15 palabras TOTALES** por generación de 10 segundos (~1.5 palabras/segundo). Pasar de 16 palabras provoca que Google Omni corte, acelere o atropelle el audio.
  2. **Diálogo de 2 Personajes**: Si hablan dos personajes en la misma toma de 10s, **máximo 6 a 8 palabras por personaje**.
  3. **Tomas Individuales**: Si una línea requiere más desarrollo (10-14 palabras), asignarle una generación/corte individual de 10 segundos.
  4. **Regla Estricta de Google Flow (No Describir Físicamente a los Personajes)**: Los personajes ya están anclados y configurados en Google Flow. En el texto del prompt cinematográfico de Google Omni/Veo, nombrarlos **EXCLUSIVAMENTE** como **Vector** y **Digital Twin**. Queda estrictamente prohibido describir su ropa, raza o accesorios.
* **Regla Estricta de Motion Graphics Nativos en Video (PROHIBIDO REMOTION)**: Todas las motion graphics, animaciones tipográficas, llamadas a la acción, textos flotantes, interfaces HUD y overlays deben ser **generados directamente dentro del video** mediante la prosa cinematográfica del generador de video (Google Omni / Google Veo). Queda terminantemente prohibido usar Remotion, React o código de motion graphics a menos que el usuario pida de forma explícita "remotion" o "hyperframes".

---

## 📸 4. Regla Obligatoria de Consistencia de Personajes y Referencias (`assets/`)

> ⚠️ **REGLA ESTRICTA ANTES DE GENERAR CUALQUIER ASSET**:
> Antes de generar cualquier imagen, keyframe, escena o slide de carrusel, **SIEMPRE debes inspeccionar la carpeta [`assets/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/assets)** para cargar el contexto visual exacto:
> 
> 1. **Digital Twin**: Archivos en [`assets/Digital Twin/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/assets/Digital%20Twin) (Director hispano/latino, cabello ondulado oscuro a los hombros, barba/stubble corta, chaqueta técnica gris/oscura).
> 2. **Vector**: Archivos en [`assets/Vector/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/assets/Vector) (Miniature Schnauzer gris/negro, chaleco de mezclilla vintage con cuello y botones de bronce, gafas de sol oscuras).
> 3. **Logos & Branding**: Archivos en [`assets/Ai Video Revolution Logo/`](file:///Users/felipehernancontrerasclavero/Desktop/Proyectos/customagents/assets/Ai%20Video%20Revolution%20Logo).
> 
> Al invocar `generate_image`, **SIEMPRE incluye las rutas absolutas de estas imágenes en el parámetro `ImagePaths`** (hasta 3 referencias) para anclar la identidad visual y garantizar 100% de consistencia sin variaciones accidentales de personaje.
