## Workshops slides (Slidev)

This repository hosts Slidev decks for the MVP Building workshop.

### View online

- **Slides index**: [https://sanjeed5.github.io/workshops/](https://sanjeed5.github.io/workshops/)
- **Direct links**:
  - [01 · Plan Your MVP](https://sanjeed5.github.io/workshops/01_mvp_planning/)
  - [02 · Build Your MVP with Cursor](https://sanjeed5.github.io/workshops/02_mvp_building/)

If you see the repository README instead of slides, go to GitHub Settings → Pages → Build and deployment, and set Source to GitHub Actions. Then re-run the Deploy workflow or push to `main` and wait a few minutes.

### Local development

```bash
cd mvp-building
pnpm install --frozen-lockfile

# Run each deck during development
pnpm exec slidev 01_mvp_planning.md --open
pnpm exec slidev 02_mvp_building.md --open
```

### Build locally

```bash
cd mvp-building
pnpm build -- --base /workshops/
```

### Deploy

GitHub Actions builds and deploys on every push to `main` using `.github/workflows/deploy.yml`. The workflow uploads `mvp-building/dist` to GitHub Pages.

### Resources

- [Slidev documentation](https://sli.dev)
