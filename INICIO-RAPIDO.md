# 🚀 INICIO RÁPIDO

## En 3 Comandos

```bash
npm install
npm run dev
# Abre http://localhost:5173
```

¡Eso es! 💖

---

## Próximo: Personalizar en 2 Minutos

1. Abre `public/config.json`
2. Cambia:
   - `title` → Tu pregunta
   - `subtitle` → Tu subtítulo
   - `finalQuestion` → Tu pregunta (puede ser igual)
   - `successMessage` → Tu mensaje

3. Guarda el archivo
4. El navegador se actualiza automáticamente (HMR)

---

## Agregar Fotos

1. Coloca JPG/PNG en `public/assets/images/`
2. En `config.json`, agrega a `memories[]`:

```json
{
  "id": 4,
  "date": "tu fecha",
  "text": "tu texto",
  "imagePath": "/assets/images/nombre.jpg",
  "type": "photo"
}
```

3. ¡Listo! Se actualiza automáticamente

---

## Notas

- **Emojis:** Funciona con cualquier emoji 😊💕🎉
- **Imágenes:** Soporta JPG, PNG, WebP
- **URLs públicas:** Puedes usar URLs como `https://via.placeholder.com/400x300`
- **Mobile:** Abre en tu celular con la URL que sale en terminal

---

## Documentación Completa

- **README.md** - Guía completa
- **PERSONALIZACION.md** - Cambios avanzados
- **ENTREGABLES.md** - Todo lo incluido

---

**¿Preguntas?** Lee los archivos .md o revisa el código (está comentado) 💖
