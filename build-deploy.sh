#!/bin/bash

echo "🔨 Limpiando index.html..."
cat > index.html << 'INDEXEOF'
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Una propuesta romántica minimalista hecha con amor" />
    <meta name="theme-color" content="#ec4899" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💖</text></svg>" />
    <title>Mi Propuesta</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
INDEXEOF

echo "📦 Compilando..."
npm run build || exit 1

echo "📁 Copiando archivos compilados a raíz..."
cp dist/index.html index.html
rm -rf assets stickers config.json favicon.svg icons.svg
cp -r dist/assets .
cp -r dist/stickers . 2>/dev/null || true
cp dist/config.json dist/favicon.svg dist/icons.svg .

echo "✅ Listo para commit y push"
echo ""
echo "Ejecuta:"
echo "  git add -A && git commit -m 'tu mensaje' && git push"
