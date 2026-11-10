# Deploy to REG.RU

1. Open Actions and run **Build DUMRAUF.RU**.
2. Wait for a green build.
3. Download `dumrauf-ru-production` from the workflow run.
4. Back up the current site in REG.RU first.
5. Upload the archive contents (index.html, assets/, .htaccess) into `/www/dumrauf.ru/`.

The `.htaccess` file provides React SPA route fallback for Apache with `mod_rewrite`. PHP is not required. DNS settings are not changed by this project.

FTP deployment is intentionally not automated until the host, protocol, port and credentials are confirmed. Never commit hosting passwords or tokens.
