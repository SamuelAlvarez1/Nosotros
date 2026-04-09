# 💖 Mi Propuesta Romántica

Una Single Page Application (SPA) minimalista y romántica para hacer una propuesta especial. Hecha con React, Vite, Tailwind CSS y Framer Motion.

## 🎯 Características

✨ **Diseño Minimalista**: Interfaz limpia y elegante enfocada en lo importante  
📱 **Mobile First**: Optimizado completamente para celulares  
🎬 **Animaciones Suaves**: Usa Framer Motion para transiciones elegantes  
📊 **Data-Driven**: Toda la configuración en un archivo JSON  
🎉 **Confetti al Final**: Lluvia de confeti cuando dice que sí  
🏃 **Ultra Rápido**: Vite asegura velocidad máxima  

## 📂 Estructura de Carpetas

```
propuesta/
├── public/
│   ├── config.json              # 🔧 Archivo de configuración principal
│   └── assets/
│       ├── images/              # 📸 Fotos de recuerdos
│       └── stickers/            # 🎨 Stickers/emojis personalizados
├── src/
│   ├── components/
│   │   ├── Hero.jsx             # Sección de bienvenida
│   │   ├── Timeline.jsx         # Timeline de recuerdos
│   │   ├── FinalQuestion.jsx    # Pregunta con botones (No se mueve)
│   │   └── SuccessScreen.jsx    # Pantalla de éxito con confeti
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── tailwind.config.js           # Configuración de Tailwind
├── vite.config.js               # Configuración de Vite
└── package.json

```

## 🚀 Instalación y Desarrollo

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

1. **Clonar o descargar el proyecto**
```bash
cd propuesta
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar servidor de desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## ⚙️ Personalización

### 1️⃣ Editar `public/config.json`

Este archivo controla TODO el contenido de la página:

```json
{
  "title": "Mi amor, ¿quieres ser mi novia?",
  "subtitle": "Un viaje a través de nuestros momentos especiales",
  "memories": [
    {
      "id": 1,
      "date": "15 de Enero, 2024",
      "text": "Aquel primer café donde nuestras miradas se cruzaron.",
      "imagePath": "/assets/images/memory-1.jpg",
      "type": "photo"
    },
    {
      "id": 2,
      "date": "22 de Febrero, 2024",
      "text": "Tu risa es mi melodía favorita.",
      "imagePath": "/assets/stickers/sticker-1.png",
      "type": "sticker"
    }
  ],
  "finalQuestion": "¿Quieres ser mi novia?",
  "yesButtonText": "¡SÍ, quiero! 💕",
  "noButtonText": "Mmm, no sé...",
  "successMessage": "¡Eres la persona más especial de mi vida! 🌹✨",
  "successSubtitle": "Gracias por decir que sí. Este es el comienzo de nuestra historia.",
  "finalImagePath": "/assets/images/final.jpg"
}
```

**Campos Disponibles:**
- `title`: Título principal (visible en Hero)
- `subtitle`: Subtítulo del Hero
- `memories`: Array de recuerdos (foto o sticker)
  - `id`: Identificador único (número)
  - `date`: Fecha del recuerdo
  - `text`: Descripción o mensaje
  - `imagePath`: Ruta relativa a `/assets/`
  - `type`: `"photo"` para fotos tipo Polaroid o `"sticker"` para elementos flotantes
- `finalQuestion`: Pregunta de la propuesta
- `yesButtonText`: Texto del botón "Sí"
- `noButtonText`: Texto del botón "No" (que se mueve)
- `successMessage`: Mensaje de éxito
- `successSubtitle`: Subtítulo del éxito
- `finalImagePath`: Foto final (opcional)

### 2️⃣ Agregar Fotos y Stickers

**Para fotos:**
1. Coloca tus imágenes JPG/PNG en `public/assets/images/`
2. Referencia en config.json: `"/assets/images/nombre-archivo.jpg"`

**Para stickers:**
1. Coloca PNGs con fondo transparente en `public/assets/stickers/`
2. Usa `"type": "sticker"` en el config.json

### 3️⃣ Personalizar Colores

Edita `tailwind.config.js` para cambiar el esquema de colores:

```javascript
theme: {
  extend: {
    colors: {
      rose: {
        500: '#ec4899',  // Color primario
        600: '#db2777',  // Hover
        // ... otros tonos
      },
    },
  },
}
```

Luego usa en los componentes con clases como `bg-rose-500`, `text-rose-900`, etc.

## 🛠️ Construir para Producción

```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`

## 📱 Desplegar en GitHub Pages

### 1. Actualizar `vite.config.js`

Agrega la base correcta si el repo no es username.github.io:

```javascript
export default {
  base: '/nombre-del-repo/',
  // ... resto de config
}
```

### 2. Compilar

```bash
npm run build
```

### 3. Subir a GitHub

```bash
git add dist/
git commit -m "Deploy: Producción lista"
git push
```

### 4. Configurar GitHub Pages

1. Ve a Settings → Pages
2. Selecciona "Deploy from a branch"
3. Elige rama `main` y carpeta `/ (root)` o `/docs`
4. Sube la carpeta `dist/` a esa ubicación

## 🎨 Personalización Avanzada

### Cambiar Animaciones

En los componentes, busca `animate={{ ... }}` y `transition={{ ... }}` para ajustar:

- `duration`: Tiempo en segundos
- `repeat`: `Infinity` para loop, o número de veces
- `delay`: Retraso antes de iniciar
- `ease`: `"easeInOut"`, `"easeIn"`, `"easeOut"`, `"linear"`

### Customizar Confetti

En `SuccessScreen.jsx`, la función `confetti()` controla:

```javascript
confetti({
  particleCount: 50,      // Cantidad de partículas
  angle: 90,              // Ángulo (0-360)
  spread: 45,             // Dispersión
  startVelocity: 25,      // Velocidad inicial
  colors: ['#ec4899', '#f472b6', '#fff'], // Colores
});
```

## ✅ Checklist Antes de Mostrar

- [ ] Cambiar textos en `config.json`
- [ ] Agregar fotos en `public/assets/images/`
- [ ] Agregar stickers en `public/assets/stickers/` (si aplica)
- [ ] Probar en móvil con `npm run dev`
- [ ] Construir con `npm run build`
- [ ] Desplegar en GitHub Pages
- [ ] ¡Pedirle que sea tu novia! 💕

## 🐛 Troubleshooting

**Las fotos no cargan:**
- Verifica que la ruta en `config.json` sea correcta
- Usa `/assets/images/nombre.jpg` (nunca `./`)
- Asegúrate de que el archivo exista en esa carpeta

**El botón "No" no se mueve:**
- Asegúrate de estar en desktop (el movimiento es en hover)
- En móvil usa touch events

**Las animaciones se sienten lentas:**
- Reduce `duration` en framer motion
- Aumenta `stiffness` en controles spring

## 📄 Licencia

Libre para usar, modificar y compartir. ¡Hecho con amor! 💖

---

**Tip:** Abre esto en tu móvil para un mejor efecto. ¡Buena suerte! 🍀✨
