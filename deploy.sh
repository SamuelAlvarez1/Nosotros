#!/bin/bash

# Script para desplegar en GitHub Pages
# Uso: ./deploy.sh

echo "🚀 Iniciando despliegue..."

# Construir proyecto
echo "📦 Compilando proyecto..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Compilación exitosa"
  echo ""
  echo "📁 Los archivos están listos en ./dist/"
  echo ""
  echo "Próximos pasos:"
  echo "1. Crea un repositorio en GitHub (si no lo has hecho)"
  echo "2. git remote add origin https://github.com/usuario/nombre-repo"
  echo "3. git add ."
  echo "4. git commit -m 'Initial commit: romantic proposal'"
  echo "5. git push -u origin main"
  echo ""
  echo "6. Ve a Settings → Pages"
  echo "7. Selecciona 'Deploy from a branch'"
  echo "8. Elige 'main' y '/ (root)'"
  echo ""
  echo "💖 ¡Tu propuesta estará en línea en unos minutos!"
else
  echo "❌ Error durante la compilación"
  exit 1
fi
