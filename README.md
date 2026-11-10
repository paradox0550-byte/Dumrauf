# DUMRAUF.RU

Bilingual personal website (RU/EN) for Alexander Dumrauf. React + TypeScript + Vite.

## Local development

Requires Node.js 22.

```bash
npm install
npm run dev
npm run build
```

## Production on REG.RU

GitHub Actions builds the site and uploads the `dumrauf-ru-production` artifact. The artifact contains `index.html`, `assets/`, and `.htaccess`. Back up the existing site, then upload the artifact contents (not the repository root) to `/www/dumrauf.ru/`.

See [DEPLOY-REG-RU.md](DEPLOY-REG-RU.md) for the deployment steps. Hosting credentials are intentionally not stored in this repository.
