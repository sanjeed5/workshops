# MVP Building Slides

A two-part workshop about planning and building MVPs.

## Develop

From `mvp-building`:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:3030>

Open specific deck:

- `npx slidev 01_mvp_planning.md`
- `npx slidev 02_mvp_building.md`

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that:

- Installs dependencies in `mvp-building`
- Builds both decks with a base path
- Uploads `mvp-building/dist` to GitHub Pages

Access after first push to `main`:

- `https://sanjeed5.github.io/workshops/` → landing page
- `https://sanjeed5.github.io/workshops/01_mvp_planning/`
- `https://sanjeed5.github.io/workshops/02_mvp_building/`