# VINITHTHA NAGESWARAN - Digital Portfolio

Responsive portfolio built with HTML, CSS, and JavaScript.

## Project Structure

- `index.html` — main portfolio page
- `style.css` — styling and responsive layout
- `script.js` — scroll-reveal animations
- `photo.jpg` — profile photo

## Important: GitHub Pages Image Fix

Do **not** use a Windows path such as `C:\Users\vinit\Downloads\...` in HTML. GitHub Pages cannot access files on your computer. The profile image must be stored inside the repository and referenced with a relative path.

This version uses:

```html
<img src="photo.jpg" ...>
```

Keep `photo.jpg` in the same folder as `index.html`. File and folder names are case-sensitive on GitHub Pages.

## Deploy

1. Upload all five files to the same GitHub repository/folder.
2. Make sure the files are named exactly `index.html`, `style.css`, `script.js`, and `photo.jpg`.
3. Enable GitHub Pages from the repository's Pages settings.
4. Refresh the published site after GitHub finishes deploying.

## Local Testing

Open `index.html` in a browser, or use VS Code Live Server.

If the photo is replaced, keep the filename `photo.jpg`, or update the `src` in `index.html`.
