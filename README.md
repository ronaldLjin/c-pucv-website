# c-pucv-website

[https://c-pucv.ca/](https://c-pucv.ca/)

The Calgary Pop-Up Care Village website, built with **React + Vite** and
deployed to **GitHub Pages**.

## Development

```bash
npm install     # install dependencies
npm run dev     # start the local dev server (http://localhost:5173)
npm run build   # production build into dist/
npm run preview # serve the production build locally
```

## Project structure

```
index.html            Vite entry (analytics, global CSS links, SPA redirect)
public/               Static files copied to the site root as-is
  assets/             Images, fonts, Font Awesome, videos, stylesheets
  CNAME               Custom domain (c-pucv.ca)
  404.html            SPA fallback so clean URLs work on GitHub Pages
src/
  main.jsx            App bootstrap + router
  App.jsx             Routes
  components/         Navbar, Footer, Accordion, Modal, Countdown, carousels, charts
  pages/              Home, History, RecapJan2023, RecapSep2022
```

## Routing

Client-side routing uses clean paths (`/history`, `/01-24-2023`, `/09-27-2022`).
Because GitHub Pages has no server-side rewrites, `public/404.html` redirects
deep links back to `index.html`, where a small script restores the original
path for React Router (the [spa-github-pages](https://github.com/rafgraph/spa-github-pages)
technique).

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages. The repository's **Settings → Pages
→ Source** must be set to **GitHub Actions**.
