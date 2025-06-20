# Indomi Studio Clone

A React portfolio website built with Vite and deployed on GitHub Pages.

## GitHub Pages SPA Routing Fix

GitHub Pages only serves static files, so direct navigation to routes like `/portfolio` returns 404. Here's how we fixed it:

### The Problem
- Visiting `https://yoursite.github.io/portfolio` directly → 404 error
- Clicking portfolio link from homepage → works fine (client-side routing)

### The Solution
1. **Create `public/404.html`** - Redirects missing routes to index.html with route info
2. **Add script to `index.html`** - Converts redirected URLs back to clean format

### How It Works
```
User visits /portfolio 
→ GitHub serves 404.html (no portfolio.html exists)
→ 404.html redirects to /?/portfolio 
→ index.html loads and script converts /?/portfolio back to /portfolio
→ React Router handles the route normally
```

Now direct links like `/portfolio`, `/about`, etc. work perfectly!

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
npm run deploy
```
