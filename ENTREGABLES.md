# 📦 Entregables - SPA Romántica Minimalista

## ✅ Lo que está incluido

### 🏗️ Estructura del Proyecto
```
propuesta/
├── public/
│   ├── config.json              ← Configuración data-driven (TODO el contenido)
│   ├── assets/
│   │   ├── images/              ← Carpeta para tus fotos
│   │   └── stickers/            ← Carpeta para stickers/emojis
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Hero.jsx             ← Sección inicial con fade-in
│   │   ├── Timeline.jsx         ← Timeline de recuerdos con scroll animations
│   │   ├── FinalQuestion.jsx    ← Pregunta con botón "No" que se mueve
│   │   └── SuccessScreen.jsx    ← Pantalla final con confetti
│   ├── App.jsx                  ← Componente principal orquestador
│   ├── main.jsx                 ← Punto de entrada
│   └── index.css                ← Estilos globales + Tailwind
│
├── tailwind.config.js           ← Configuración personalizada
├── vite.config.js               ← Configuración de Vite
├── package.json                 ← Dependencias
├── index.html                   ← HTML minimalista
├── README.md                    ← Documentación completa
├── PERSONALIZACION.md           ← Guía de customización
└── deploy.sh                    ← Script para GitHub Pages
```

---

## 🎯 Componentes Principales

### 1. **Hero.jsx** (Sección de Bienvenida)
```jsx
- Fade-in elegante con Framer Motion
- Título y subtítulo customizable
- Emojis decorativos flotantes (💕, 🌹)
- Responsive mobile-first
- Gradiente de fondo (rosa → blanco → rosa)
```

**Personalización:** Edita `config.json` → `title` y `subtitle`

---

### 2. **Timeline.jsx** (Galería de Recuerdos)
```jsx
Características:
✨ Scroll animations con useScroll de Framer Motion
📸 Tarjetas tipo Polaroid para fotos (rotadas, efecto hover)
🎨 Stickers flotantes con levitación continua
📱 Layout responsive (1 columna en móvil, centrado en desktop)
- Línea central decorativa
- Lazy loading de imágenes (placeholders grises si fallan)
- Dos tipos de contenido: "photo" y "sticker"
```

**Personalización:** Edita `config.json` → `memories[]`

---

### 3. **FinalQuestion.jsx** (Pregunta y Botones)
```jsx
Características:
❤️ Corazón animado (late continuamente)
✅ Botón "Sí" → Normal (clickeable)
❌ Botón "No" → Se mueve aleatoriamente al pasar ratón
📱 En móvil: Usa touch events para activar movimiento
- Mensaje subtitular irónico ("No hay opción de no 😉")
- Decoraciones flotantes (✨, 🌹)
- Animación spring para movimiento natural
```

**Personalización:** Edita textos en `config.json`

---

### 4. **SuccessScreen.jsx** (Pantalla de Éxito)
```jsx
Características:
🎉 Lluvia de confetti (automática al ver componente)
💖 Emojis celebratorios animados
✨ Gradiente de fondo especial
📸 Foto final (opcional)
- Mensaje de éxito customizable
- Subtítulo personalizado
- Box decorativo con mensaje adicional
- Emojis flotantes (🌹, 💐)
```

**Personalización:** Edita `config.json` → `successMessage`, `finalImagePath`

---

### 5. **App.jsx** (Orquestador Principal)
```jsx
- Carga config.json automáticamente
- Gestiona estado showSuccess (cambia pantalla)
- Loading fallback mientras carga
- Error handling si falla config
- Renderiza Hero → Timeline → FinalQuestion → SuccessScreen
```

---

## 🎨 Configuración de Tailwind

**Archivo:** `tailwind.config.js`

```javascript
✨ Colores personalizados (rose palette)
🎬 Animaciones custom:
  - fade-in (0.5s)
  - float (levitación)
  - pulse-soft (parpadeo suave)
🎨 Componentes reutilizables:
  - .card-polaroid (tarjetas tipo foto)
  - .btn-primary (botón sí)
  - .btn-secondary (botón no)
```

---

## 📄 Configuración JSON

**Archivo:** `public/config.json`

```json
{
  "title": string                      // Título principal
  "subtitle": string                   // Subtítulo hero
  "memories": [                        // Array de recuerdos
    {
      "id": number                     // Identificador único
      "date": string                   // Fecha mostrada
      "text": string                   // Descripción
      "imagePath": string              // Ruta /assets/...
      "type": "photo" | "sticker"      // Tipo de contenido
    }
  ],
  "finalQuestion": string              // Pregunta principal
  "yesButtonText": string              // Texto botón sí
  "noButtonText": string               // Texto botón no
  "successMessage": string             // Mensaje éxito
  "successSubtitle": string            // Subtítulo éxito
  "finalImagePath": string             // Foto final (opcional)
}
```

---

## 🚀 Stack Tecnológico

| Librería | Versión | Propósito |
|----------|---------|----------|
| **React** | 19 | Framework principal |
| **Vite** | 8 | Bundler ultra-rápido |
| **Framer Motion** | Latest | Animaciones smooth |
| **Tailwind CSS** | 4 | Estilos utilities |
| **canvas-confetti** | Latest | Lluvia de confeti |

**Total Size:** ~120KB gzip (incluyendo todas las dependencias)

---

## 📱 Características Mobile-First

```
✅ 100% responsive
✅ Touch events para botones
✅ Viewport meta tag configurado
✅ Imágenes escalables
✅ Fuentes legibles
✅ Botones grandes y clickeables
✅ Sin scrolls horizontales
✅ Performance optimizado
```

---

## 🎬 Animaciones Incluidas

### Hero
- Fade-in staggered de título y línea
- Flotación continua de emojis (💕, 🌹)

### Timeline
- Scroll-triggered opacity + scale
- Rotación y zoom al pasar ratón (fotos)
- Levitación continua (stickers)
- Efecto de entrada suave

### FinalQuestion
- Latido del corazón (pulse)
- Movimiento aleatorio del botón "No"
- Rotación de decoraciones

### SuccessScreen
- Confetti explosion
- Bounce de emojis celebratorios
- Flotación suave de decoraciones
- Hover scale en foto final

---

## 🔄 Flujo de la Aplicación

```
1. Carga App.jsx
   ↓
2. Fetch config.json
   ↓
3. showSuccess = false → Render página propuesta
   - Hero (fade-in)
   - Timeline (scroll animations)
   - FinalQuestion (interactivo)
   ↓
4. Usuario clickea "Sí"
   ↓
5. setShowSuccess(true)
   ↓
6. Render SuccessScreen
   - Confetti automático
   - Mensajes celebratorios
   ↓
7. ¡Fin! 💖
```

---

## 🛠️ Comandos Disponibles

```bash
npm install          # Instalar dependencias (una sola vez)
npm run dev          # Servidor de desarrollo (hot reload)
npm run build        # Compilar para producción
npm run preview      # Preview de build local
npm run lint         # Chequear código
```

---

## 📋 Checklist de Implementación

- [x] Estructura de carpetas
- [x] Componentes React principales
- [x] Configuración Tailwind personalizada
- [x] Framer Motion animations
- [x] Canvas-confetti integrado
- [x] Data-driven config.json
- [x] Mobile-first design
- [x] Loading states
- [x] Error handling
- [x] Documentación completa
- [x] Script de deployment

---

## 🚀 Próximos Pasos

### Para Usar Ahora
1. `npm install`
2. Edita `public/config.json` con tus datos
3. Coloca fotos en `public/assets/images/`
4. `npm run dev`
5. Prueba en http://localhost:5173

### Para Producción
1. `npm run build`
2. Sube carpeta `dist/` a GitHub Pages
3. O usa Netlify/Vercel para auto-deploy

---

## 💡 Ideas Adicionales (Opcionales)

### Agregar Música
```jsx
// En Hero.jsx
<audio autoPlay loop src="/bg-music.mp3" />
```

### Agregar Video
```jsx
// Sustituye imagen en Timeline
<video src="/memory.mp4" autoPlay loop />
```

### Añadir Contador
```jsx
// En App.jsx
const daysLogether = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24));
```

### Hacer Privado
```jsx
// Pide contraseña antes de mostrar
const [password, setPassword] = useState('');
const checkPassword = (pw) => pw === 'miContraseña';
```

---

## 📞 Soporte

**Errores comunes:**
- Fotos no cargan → Verifica ruta `/assets/images/`
- Botón "No" no se mueve → Es normal en móvil
- Build falla → Limpia node_modules y reinstala

**Para más ayuda:**
- Lee README.md
- Consulta PERSONALIZACION.md
- Revisa los comentarios en los componentes

---

## 🎓 Estructura de Datos Recomendada

### config.json Mínimo
```json
{
  "title": "¿Quieres ser mi novia?",
  "subtitle": "Te amo",
  "memories": [],
  "finalQuestion": "¿Quieres ser mi novia?",
  "yesButtonText": "Sí",
  "noButtonText": "No",
  "successMessage": "¡Te amo!",
  "successSubtitle": "Vamos a ser felices"
}
```

### config.json Completo
```json
{
  "title": "Una Historia de Amor",
  "subtitle": "Nuestros momentos especiales",
  "memories": [
    {
      "id": 1,
      "date": "15 de Enero",
      "text": "Primer café",
      "imagePath": "/assets/images/cafe.jpg",
      "type": "photo"
    },
    {
      "id": 2,
      "date": "22 de Febrero",
      "text": "Tu risa",
      "imagePath": "/assets/stickers/heart.png",
      "type": "sticker"
    }
  ],
  "finalQuestion": "¿Quieres ser mi novia?",
  "yesButtonText": "¡SÍ, quiero! 💕",
  "noButtonText": "Mmm...",
  "successMessage": "¡Dijiste que sí!",
  "successSubtitle": "Eres la mejor",
  "finalImagePath": "/assets/images/final.jpg"
}
```

---

**¡Tu SPA está lista para conquistar corazones! 💖✨**

Cualquier duda, revisa el código - está comentado y es muy legible.

¡Buena suerte! 🍀
