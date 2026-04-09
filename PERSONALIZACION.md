# 🎯 Guía Rápida de Personalización

## ⚡ 5 Minutos para Personalizar

### Paso 1: Textos Principales
Abre `public/config.json` y modifica:

```json
{
  "title": "TU PREGUNTA AQUÍ",
  "subtitle": "Tu subtítulo"
}
```

### Paso 2: Mensajes Finales
En el mismo archivo:

```json
{
  "finalQuestion": "¿Quieres ser mi novia?",
  "successMessage": "¡Dijiste que sí! 🎉",
  "successSubtitle": "Tu mensaje personalizado aquí"
}
```

### Paso 3: Agrega Recuerdos
En `config.json`, modifica el array `memories`:

```json
"memories": [
  {
    "id": 1,
    "date": "fecha importante",
    "text": "Lo que pasó ese día",
    "imagePath": "/assets/images/foto1.jpg",
    "type": "photo"
  },
  {
    "id": 2,
    "date": "otra fecha",
    "text": "Otro recuerdo",
    "imagePath": "/assets/stickers/sticker.png",
    "type": "sticker"
  }
]
```

### Paso 4: Sube tus Fotos
1. Carpeta `public/assets/images/` → JPG, PNG con tus fotos
2. Carpeta `public/assets/stickers/` → PNG con fondo transparente (opcional)

### Paso 5: Prueba Localmente
```bash
npm run dev
```

Abre http://localhost:5173 en tu celular (o scan del QR que muestra la terminal)

---

## 🎨 Cambios Avanzados

### Cambiar Color Principal (De Rosa a Otro)

Edita `tailwind.config.js`:

**De:** `bg-rose-500`, `text-rose-900`  
**A:** `bg-blue-500`, `text-blue-900`

O personaliza los colores completamente:

```javascript
colors: {
  custom: {
    light: '#ffb3e6',
    main: '#ff66cc',
    dark: '#cc0099',
  }
}
```

Luego usa: `bg-custom-main`, `text-custom-dark`, etc.

### Cambiar Velocidad de Animaciones

En `src/components/Timeline.jsx`:
```javascript
transition={{ duration: 0.8 }} // Cambiar 0.8 a otro valor
```

Menor = más rápido, Mayor = más lento

### Personalizar Botones

En `tailwind.config.js`, busca `.btn-primary`:
```css
.btn-primary {
  @apply px-8 py-3 rounded-lg /* cambios aquí */
}
```

### Desactivar Confetti (o Hacerlo Diferente)

En `src/components/SuccessScreen.jsx`, comenta o modifica:
```javascript
confetti({
  particleCount: 50,  // Reduce para menos confeti
  colors: ['#ec4899', '#f472b6'], // Tus colores
})
```

---

## 📝 Ejemplos de config.json

### Ejemplo Minimalista
```json
{
  "title": "¿Quieres ser mi novia?",
  "subtitle": "Te amo",
  "memories": [],
  "finalQuestion": "¿Quieres ser mi novia?",
  "yesButtonText": "Sí ❤️",
  "noButtonText": "No",
  "successMessage": "¡Vamos a ser felices!",
  "successSubtitle": "Te amo"
}
```

### Ejemplo Completo
```json
{
  "title": "Una Historia de Amor",
  "subtitle": "Nuestros momentos más especiales",
  "memories": [
    {
      "id": 1,
      "date": "Primer encuentro",
      "text": "Cuando nuestros ojos se cruzaron",
      "imagePath": "/assets/images/primer-cafe.jpg",
      "type": "photo"
    },
    {
      "id": 2,
      "date": "Primer viaje",
      "text": "Aventuras contigo",
      "imagePath": "https://via.placeholder.com/400x300",
      "type": "photo"
    },
    {
      "id": 3,
      "date": "Simplemente hoy",
      "text": "Eres mi persona favorita",
      "imagePath": "/assets/stickers/corazon.png",
      "type": "sticker"
    }
  ],
  "finalQuestion": "¿Quieres ser mi novia?",
  "yesButtonText": "¡SÍ, quiero! 💕",
  "noButtonText": "No sé...",
  "successMessage": "¡Eres la mejor decisión que he hecho!",
  "successSubtitle": "Hoy comienza el resto de nuestras vidas juntos",
  "finalImagePath": "/assets/images/nosotros.jpg"
}
```

---

## 🚀 Desde Cero a Producción

### Para Desarrollo Local
```bash
npm install      # Una sola vez
npm run dev      # Cada vez que quieras desarrollar
```

Accede desde móvil: Copia la URL que sale en terminal (ej: http://192.168.x.x:5173)

### Para Producción
```bash
npm run build    # Crea la carpeta dist/
```

Sube `dist/` a:
- GitHub Pages
- Netlify
- Vercel
- Tu servidor

---

## 📱 Testing en Móvil

**Local:**
```bash
npm run dev
# Copia la URL del tipo: http://192.168.1.100:5173
# Abre en tu celular
```

**Desde Anywhere:**
Usa un servicio como:
- ngrok
- Cloudflare Tunnel
- LocalTunnel

```bash
npx localtunnel --port 5173
# Comparte el link que genera
```

---

## ✨ Tips Profesionales

1. **Usa fotos de buena calidad** - Se ven mejor en Polaroid
2. **Textos cortos** - Máximo 2-3 líneas por recuerdo
3. **Prueba en móvil** - Antes de mostrar a ella
4. **Emojis con criterio** - Menos es más
5. **Colores consistentes** - Mantén un esquema
6. **Velocidad** - Vite es rápido, pero optimiza imágenes
7. **Backup** - Guarda el proyecto en Git

---

## 🆘 Problemas Comunes

**P: Las fotos no cargan**
R: Verifica la ruta. Debe ser `/assets/images/nombre.jpg` (con `/` al inicio)

**P: El botón "No" no se mueve en móvil**
R: Es normal - se mueve al pasar ratón. En móvil usa gesture de touch

**P: Veo placeholders grises**
R: Las fotos no existen. Coloca archivos reales o usa URLs públicas

**P: ¿Puedo cambiar el idioma?**
R: Sí, cambia todos los textos en `config.json`

**P: ¿Puedo agregar música?**
R: Sí, agrega en `Hero.jsx`: `<audio autoPlay><source src="/audio.mp3" /></audio>`

---

**¡Listo! Ahora a conquistar el corazón de ella! 💖**
