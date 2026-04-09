# 🔧 Todos los Comandos

## Instalación y Setup Inicial

```bash
# Instalar dependencias (una sola vez)
npm install

# Inicializar Git (si no está hecho)
git init
git add .
git commit -m "Initial commit"
```

## Desarrollo

```bash
# Iniciar servidor de desarrollo (HMR habilitado)
npm run dev

# El servidor mostrará algo como:
#   VITE v8.0.8  ready in 245 ms
#   ➜  Local:   http://localhost:5173/
#   ➜  press h to show help

# Para acceder desde móvil:
#   Copia la URL del tipo: http://192.168.x.x:5173
#   O escanea el QR en la terminal
```

## Verificación y Linting

```bash
# Verificar código con ESLint
npm run lint

# (Opcional) Arreglar automáticamente issues
npm run lint -- --fix
```

## Build para Producción

```bash
# Compilar para producción
npm run build

# Esto crea la carpeta "dist/" con el sitio optimizado

# Vista previa del build local
npm run preview
```

## Git

```bash
# Ver estado
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "tu mensaje"

# Enviar a GitHub
git push -u origin main

# Ver historial
git log --oneline
```

## GitHub Pages Deployment

### Opción 1: Auto-deploy (Recomendado)

```bash
# 1. Crea repositorio en GitHub (username/propuesta)
# 2. Configura remoto
git remote add origin https://github.com/username/propuesta

# 3. Sube el código
git branch -M main
git push -u origin main

# 4. En GitHub:
#    - Settings → Pages
#    - Source: Deploy from a branch
#    - Branch: main / (root)
#    - Save
#
#    Tu sitio estará en: username.github.io/propuesta
```

### Opción 2: Manual (usando dist/)

```bash
# 1. Build
npm run build

# 2. Sube la carpeta "dist/" a GitHub Pages
#    (En Settings → Pages, sube esta carpeta)
```

## Deployment a Netlify

```bash
# 1. Instala netlify-cli
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
netlify deploy --prod --dir=dist

# Tu sitio estará disponible inmediatamente
```

## Deployment a Vercel

```bash
# 1. Instala vercel-cli
npm install -g vercel

# 2. Deploy
vercel --prod

# Tu sitio estará disponible en minutos
```

## Limpieza y Mantenimiento

```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpiar build anterior
rm -rf dist

# Eliminar cache
npm cache clean --force
```

## Actualización de Dependencias

```bash
# Ver qué está desactualizado
npm outdated

# Actualizar todo (usa con cuidado)
npm update

# Actualizar solo package.json interactivamente
npm ci
```

## Testing Local

```bash
# En desarrollo
npm run dev
# Abre http://localhost:5173 en tu navegador

# Para probar en móvil local
# Copia la URL que sale en terminal (ej: http://192.168.1.100:5173)
# Abre en tu móvil en la misma red WiFi

# Para probar desde cualquier lugar (usa ngrok)
npm install -g ngrok
ngrok http 5173
# Comparte la URL que genera
```

## Troubleshooting

```bash
# Si npm run dev no funciona
npm install
npm run dev

# Si hay errores de módulos
rm -rf node_modules
npm install

# Si falla el build
npm run build -- --force

# Ver logs de error detallados
npm run build -- --debug
```

## Variables de Entorno

```bash
# Si necesitas variables de entorno, crea un archivo .env

echo "VITE_API_URL=https://api.example.com" > .env

# En el código:
# const apiUrl = import.meta.env.VITE_API_URL
```

## Scripts Disponibles

```json
{
  "dev": "vite",                    // Desarrollo con HMR
  "build": "vite build",            // Build para producción
  "preview": "vite preview",        // Preview local del build
  "lint": "eslint . --ext .js,.jsx" // Linting
}
```

## Comandos Útiles para Desarrollo

```bash
# Abrir proyecto en VS Code
code .

# Abrir en explorador
# Windows:
start http://localhost:5173

# macOS:
open http://localhost:5173

# Linux:
xdg-open http://localhost:5173
```

## Monitoreo de Performance

```bash
# Ver tamaño de build
npm run build
# El output mostrará tamaños de cada archivo

# Analizar dependencias
npm install -g webpack-bundle-analyzer
# (Para análisis más detallado)
```

## Git Hooks (Opcional)

```bash
# Instalar husky para pre-commit hooks
npm install husky --save-dev
npx husky install

# Agregar hook pre-commit
npx husky add .husky/pre-commit "npm run lint"
```

## Workflow Recomendado

```bash
# Día 1: Setup
npm install
npm run dev

# Editar config.json
# Agregar fotos

# Día 2: Desarrollo
npm run dev
# Hacer cambios
git add .
git commit -m "Cambios"

# Día 3: Producción
npm run build
npm run preview
# Si se ve bien:
git push
# Deploy automático a GitHub Pages

# Día 4: Propuesta
# Abre el sitio en móvil
# ¡Haz la propuesta! 💖
```

## Tips Profesionales

```bash
# Ver estado conciso
git status -s

# Commits más limpios
git log --oneline --graph --all

# Descartar cambios (cuidado!)
git checkout -- .

# Ver qué cambió
git diff

# Ver cambios staged
git diff --staged
```

## Rollback / Deshacer

```bash
# Deshacer último commit (mantiene cambios)
git reset --soft HEAD~1

# Deshacer último commit (descarta cambios)
git reset --hard HEAD~1

# Ver histórico de cambios
git reflog
```

## Cheat Sheet Rápido

| Comando | Uso |
|---------|-----|
| `npm run dev` | Iniciar servidor |
| `npm run build` | Compilar |
| `npm run preview` | Ver build |
| `npm install` | Instalar deps |
| `git add .` | Stage todo |
| `git commit -m "msg"` | Hacer commit |
| `git push` | Enviar a GitHub |
| `rm -rf dist` | Limpiar build |
| `npm cache clean --force` | Limpiar cache |
| `git log --oneline` | Ver commits |

═══════════════════════════════════════════════════════════════════

¿Duda? Lee los archivos .md o pregunta. ¡Buena suerte! 🚀

