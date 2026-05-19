# 🧪 QA Analyzer ISTQB

Analizador de artefactos de software impulsado por IA con estándar **ISTQB Foundation Level**.  
Genera casos de prueba formales o scripts **Panaya Automation** desde documentos PDF, Word, imágenes o texto.

---

## ✨ Funcionalidades

- 📋 **Modo ISTQB** — Casos de prueba con técnicas de diseño (Partición de Equivalencia, Valores Límite, Tabla de Decisión, etc.), criterios de entrada/salida, datos de prueba y script Selenium
- 🤖 **Modo Panaya Automation** — Script completo paso a paso para implementar en Panaya Automation
- 📄 **Soporta** PDF, DOCX, TXT, PNG/JPG, MP4
- 📂 **Historial** — Guarda y consulta análisis anteriores (localStorage)
- ⬇️ **Exporta** en JSON y TXT

---

## 🚀 Deployar en GitHub Pages (paso a paso)

### 1. Crear el repositorio en GitHub

1. Ir a [github.com/new](https://github.com/new)
2. Nombre del repo: `qa-analyzer` *(o el nombre que prefieras)*
3. Visibilidad: **Public** *(GitHub Pages gratis solo en repos públicos)*
4. **No** inicializar con README
5. Click en **Create repository**

### 2. Subir el código

```bash
# Desde la carpeta del proyecto:
git init
git add .
git commit -m "Initial commit - QA Analyzer ISTQB"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/qa-analyzer.git
git push -u origin main
```

### 3. Configurar el nombre del repo en vite.config.js

Abrir `vite.config.js` y cambiar la línea `base`:

```js
base: '/qa-analyzer/',   // <- poner el nombre exacto de tu repositorio
```

Si el repo se llama `mi-proyecto`, poner `/mi-proyecto/`.

### 4. Habilitar GitHub Pages

1. Ir a tu repo en GitHub → **Settings** → **Pages**
2. En **Source** seleccionar: **GitHub Actions**
3. Guardar

### 5. Hacer push y esperar el deploy

Cada vez que hagas `git push` a `main`, GitHub Actions construye y despliega automáticamente.  
El deploy tarda ~2 minutos. La URL será:

```
https://TU_USUARIO.github.io/qa-analyzer/
```

---

## 🔑 API Key de Anthropic

La app llama directamente a la API de Anthropic desde el browser.  
**No se necesita backend** — el usuario necesita tener acceso a la API de Anthropic.

> ⚠️ **Importante:** nunca subas tu API key al repositorio.  
> La app actualmente no requiere configurar la key en el código — usa el endpoint directamente.  
> Si querés restringir el acceso, podés agregar un backend proxy.

---

## 💻 Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## 📁 Estructura del proyecto

```
qa-analyzer/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions — auto deploy a GitHub Pages
├── src/
│   ├── main.jsx              # Entry point React
│   └── App.jsx               # Aplicación completa
├── index.html                # HTML base
├── vite.config.js            # Config de Vite + base path para GitHub Pages
├── package.json              # Dependencias
├── .gitignore
└── README.md
```

---

## 🛠️ Stack

- **React 18** + **Vite 5**
- **Claude API** (Anthropic) — modelo `claude-sonnet-4-20250514`
- **Vanilla CSS** con variables (sin dependencias de UI)
- **localStorage** para historial de análisis

---

## 📝 Notas

- El historial se guarda en **localStorage** del navegador — es local por dispositivo
- Para historial compartido entre usuarios se necesita un backend (Supabase, Firebase, etc.)
- El análisis de PDFs usa la API nativa de Claude para documentos (base64)
