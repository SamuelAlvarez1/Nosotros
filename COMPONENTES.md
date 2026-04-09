# 🎯 Componentes - Descripción Detallada

## 1. Hero.jsx - Sección de Bienvenida

**Ubicación:** `src/components/Hero.jsx` (59 líneas)

### Características:
- ✨ Fade-in elegante con Framer Motion
- 📝 Título y subtítulo dinamicamente desde config.json
- 🎨 Gradiente de fondo (rosa → blanco → rosa)
- 💕 Emojis decorativos flotantes (corazones, flores)
- 📱 Totalmente responsive (mobile-first)

### Props:
```jsx
config: {
  title: string,      // "Mi amor, ¿quieres ser mi novia?"
  subtitle: string    // "Un viaje a través..."
}
```

### Animaciones:
- Entrada staggered (60ms entre elementos)
- Emojis con movimiento y() continuo
- Duración total: 1.6 segundos

### Responsive:
```
Móvil:  4xl font
Tablet: 5xl font
Desktop: 6xl font
```

---

## 2. Timeline.jsx - Galería de Recuerdos

**Ubicación:** `src/components/Timeline.jsx` (123 líneas)

### Características:
- 📸 Tarjetas tipo Polaroid para fotos
- 🎨 Stickers flotantes con levitación
- ✨ Scroll-triggered animations (Framer Motion)
- 📱 Layout responsivo (1 columna en móvil)
- 🔄 Lazy loading + fallback placeholders

### Dos Tipos de Contenido:

#### Type: "photo"
```json
{
  "type": "photo",
  "imagePath": "/assets/images/memory.jpg",
  "text": "Descripción"
}
```
- Estilo Polaroid (rotada -3° o +3°)
- Hover: gira a 0°, zoom x1.05
- Sombra para profundidad

#### Type: "sticker"
```json
{
  "type": "sticker",
  "imagePath": "/assets/stickers/emoji.png",
  "text": "Mensaje"
}
```
- Levitación continua (y: -20px, 3s)
- Hover: zoom x1.2
- Sin rotación

### Props:
```jsx
config: {
  memories: [
    { id, date, text, imagePath, type }
  ]
}
```

### Animaciones:
- Scroll progress: 0 → 1 (opacity, scale, translate)
- Sticker levitation: infinite 3s
- Hover effects: smooth transitions

---

## 3. FinalQuestion.jsx - Pregunta y Botones

**Ubicación:** `src/components/FinalQuestion.jsx` (131 líneas)

### Características:
- ❓ Pregunta grande y clara
- ✅ Botón "Sí" → Normal (clickeable)
- ❌ Botón "No" → Se mueve (no clickeable)
- 📱 Touch events en móvil
- 💖 Corazón animado (latido)

### Interactividad del Botón "No":

```javascript
// Usa spring animation
animate={{
  x: randomX(-150 a 150),
  y: randomY(-100 a 100)
}}
transition={{
  type: 'spring',
  stiffness: 200,
  damping: 20
}}
```

**Eventos:**
- Desktop: `onMouseEnter`
- Móvil: `onTouchStart`

### Props:
```jsx
config: {
  finalQuestion: string,      // "¿Quieres ser mi novia?"
  yesButtonText: string,      // "¡SÍ, quiero! 💕"
  noButtonText: string        // "Mmm, no sé..."
},
onYes: function              // Callback al clickear Sí
```

### Estilos:
```
Botón Sí:   bg-rose-500 hover:bg-rose-600
Botón No:   bg-gray-200 disabled opacity-70
Ambos:      px-8 py-3 rounded-lg font-semibold
```

---

## 4. SuccessScreen.jsx - Pantalla de Éxito

**Ubicación:** `src/components/SuccessScreen.jsx` (159 líneas)

### Características:
- 🎉 Lluvia de confetti automática
- 💖 Emojis celebratorios animados
- 📸 Foto final (opcional)
- 🎨 Gradiente especial de fondo
- ✨ Decoraciones flotantes

### Confetti Configuration:
```javascript
confetti({
  particleCount: 50,      // Partículas por ráfaga
  angle: 55-125,          // Ángulo random
  spread: 50-70,          // Dispersión
  origin: { x: 0.5, y: 0.5 }, // Centro
  startVelocity: 10-20,   // Velocidad inicial
  decay: 0.75-0.95,       // Deceleración
  colors: ['#ec4899', ...] // Colores rosa
})
```

**Duración:** 3 segundos (750ms de ráfagas)

### Props:
```jsx
config: {
  successMessage: string,     // "¡Eres especial!"
  successSubtitle: string,    // "Gracias por..."
  finalImagePath: string      // "/assets/images/final.jpg" (opcional)
}
```

### Animaciones:
- Emojis: bounce + rotate (0.6s cada una)
- Decoraciones: y oscillation (4s infinite)
- Foto hover: scale + rotate

---

## 5. App.jsx - Orquestador Principal

**Ubicación:** `src/App.jsx` (77 líneas)

### Características:
- 🔄 Carga config.json al montar
- 📊 Gestiona estado showSuccess
- ⚠️ Error handling + fallback
- ⏳ Loading state
- 🎭 Renderiza componentes en secuencia

### Flujo de Estados:

```
[Loading]
   ↓
[Error] → Fallback config
   ↓
[Success = false] → Hero + Timeline + FinalQuestion
   ↓
[User clicks Sí] → setShowSuccess(true)
   ↓
[Success = true] → SuccessScreen
```

### Fetch Logic:
```javascript
useEffect(() => {
  fetch('/config.json')
    .then(res => res.json())
    .then(data => setConfig(data))
    .catch(() => setConfig(defaultConfig))
    .finally(() => setLoading(false))
}, [])
```

### Props:
- Ninguno (auto-carga config)

---

## 6. index.css - Estilos Globales

**Ubicación:** `src/index.css` (111 líneas)

### Incluye:
- Directivas Tailwind (@tailwind, @layer, @apply)
- Componentes CSS reutilizables
- Variables CSS originales
- Animaciones personalizadas

### Componentes Tailwind:
```css
.card-polaroid {}    /* Tarjetas Polaroid */
.btn-base {}         /* Base de botones */
.btn-primary {}      /* Botón sí */
.btn-secondary {}    /* Botón no */
```

---

## Tailwind Config

**Ubicación:** `tailwind.config.js` (48 líneas)

### Personalización:
- Palette de colores Rose extendida
- Animaciones custom (fade-in, float, pulse-soft)
- Keyframes personalizados
- Breakpoints responsivos

### Colores Rose:
```
50: #fdf2f8     (muy claro)
500: #ec4899    (principal) 💖
900: #831843    (muy oscuro)
```

---

## Relaciones entre Componentes

```
App.jsx (orquestador)
├── Loading state
├── Error handling
└── conditional rendering:
    └─ showSuccess === false:
       ├── <Hero />
       ├── <Timeline /> (si hay memories)
       └── <FinalQuestion onYes={setShowSuccess} />
       
    └─ showSuccess === true:
       └── <SuccessScreen />
```

---

## Data Flow

```
config.json
   ↓ (fetch)
App.jsx
   ├── Hero: { title, subtitle }
   ├── Timeline: { memories[] }
   ├── FinalQuestion: { finalQuestion, yesButtonText, etc }
   └── SuccessScreen: { successMessage, finalImagePath }
```

---

## Patrones de Animación

### Entrada (Hero)
```javascript
variants={{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}}
```

### Scroll-Triggered (Timeline)
```javascript
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start 0.8', 'start 0.2']
})
```

### Spring (FinalQuestion)
```javascript
transition={{
  type: 'spring',
  stiffness: 200,
  damping: 20
}}
```

### Infinito (Decoraciones)
```javascript
animate={{ y: [0, -10, 0] }}
transition={{ duration: 3, repeat: Infinity }}
```

---

**Total de componentes:** 5 + 1 archivo CSS + 1 config = 7 archivos clave**

Todo es modular, reutilizable y fácil de personalizar. 💖
