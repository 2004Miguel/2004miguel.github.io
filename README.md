# Portafolio — Tu Nombre

Landing page profesional construida con HTML, CSS, JS y Bootstrap 5.

## Estructura
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/img/placeholder-16x9.svg`
- `assets/img/favicon.svg`

## Personalización rápida
- Reemplaza “Tu Nombre”, enlaces a GitHub/LinkedIn/email y textos de proyectos.
- Cambia imágenes en `assets/img/`.
- Ajusta las badges y barras de progreso en la sección “Habilidades”.

## Despliegue en GitHub Pages
1. Crea un repo en GitHub (p.ej. `portafolio`).
2. Sube estos archivos a la raíz del repo.
3. En GitHub > Settings > Pages:
   - Source: `Deploy from a branch`
   - Branch: `main` y carpeta `/root` (o usa `gh-pages` si prefieres).
4. La página quedará en `https://<tu-usuario>.github.io/portafolio/`.

Para sitio de usuario (raíz):
- Usa un repo llamado `<tu-usuario>.github.io` y coloca los archivos allí. La URL será `https://<tu-usuario>.github.io/`.

## Desarrollo local
Cualquier servidor estático basta. Con Python:
```bash
python3 -m http.server 8080
```
Luego abre `http://localhost:8080`.

## Licencia
MIT
