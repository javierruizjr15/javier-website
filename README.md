# Javier Ruiz Portfolio

Personal portfolio for Javier Ruiz, an engineering lead focused on full-stack platform engineering, telecom infrastructure, data systems, and engineering management.

## Tech Stack

- React
- Vite
- pnpm
- Lucide React

## Local Development

```bash
pnpm install
pnpm dev
```

The Vite development server runs on `http://localhost:5173/` by default.

## Production Build

```bash
pnpm build
```

The production output is generated in `dist/`.

## Production Server

```bash
pnpm start
```

The production server serves the built `dist/` directory and reads Heroku's `PORT` environment variable.

## Project Structure

- `src/App.jsx` - portfolio content and page structure
- `src/App.css` - responsive dark-mode visual system
- `public/` - headshot, logo variants, favicon, and hero imagery
- `index.html` - metadata, title, favicon, and app entry point

## Contact Flow

The primary contact buttons use a `mailto:` link and also copy the email address to the clipboard when possible. This gives visitors a visible fallback even if their browser does not open a default mail app.

## Heroku Deployment

```bash
heroku create <app-name>
git push heroku main
heroku domains:add www.deltacores.dev
```

The canonical production URL is `https://www.deltacores.dev/`.

Point the Squarespace Domains DNS record to the DNS target returned by Heroku:

- `www.deltacores.dev` -> Heroku DNS target for the `www` domain
