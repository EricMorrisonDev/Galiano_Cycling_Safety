# Galiano Cycling Safety

Single-page static site with road safety information for cyclists visiting Galiano Island.

## Setup

```bash
npm install
npm run build
```

## Development

Watch for CSS changes while editing HTML or `src/input.css`:

```bash
npm run dev
```

Serve the site locally (from the project root):

```bash
npx serve .
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Use these settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `.` (project root)
4. Deploy. Point your QR codes at the production URL.

## Images

Add image files under `public/images/`, then reference them in `index.html` (see the commented example). Paths use `/images/your-file.jpg`.
