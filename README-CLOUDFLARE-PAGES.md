# Cloudflare Pages Deployment Guide

This project is already configured for **Cloudflare Pages static hosting**.

## What is configured

- `next.config.mjs` uses `output: 'export'`
- `npm run build` creates a static site in `out/`
- `public/_redirects` adds trailing-slash redirects
- `public/_headers` adds cache and security headers
- sitemap and schema files are generated during build

## 1. Push project to GitHub

If the project is not on GitHub yet:

```bash
git add .
git commit -m "Prepare site for Cloudflare Pages"
git push
```

## 2. Create Cloudflare Pages project

1. Log in to Cloudflare Dashboard.
2. Open `Workers & Pages`.
3. Click `Create application`.
4. Open the `Pages` tab.
5. Click `Import an existing Git repository`.
6. Connect GitHub if Cloudflare asks.
7. Select this repository.

## 3. Build settings in Cloudflare Pages

Use these values:

- Framework preset: `Next.js (Static HTML Export)`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `out`

Node 18+ is recommended. If Cloudflare asks for an environment variable, set:

```text
NODE_VERSION=20
```

## 4. Deploy

1. Click `Save and Deploy`.
2. Wait for the first build to finish.
3. Cloudflare will give you a `*.pages.dev` URL.

Every future push to the connected GitHub branch will automatically trigger a new deployment.

## 5. Connect your custom domain

1. In the Pages project, open `Custom domains`.
2. Click `Set up a custom domain`.
3. Add `northhindipandit.com`.
4. Add `www.northhindipandit.com` too if you want both versions.
5. Follow the DNS instructions shown by Cloudflare.

If your DNS is already on Cloudflare, this step is usually very quick.

## 6. Recommended post-deploy checks

Check these URLs after deployment:

- `/`
- `/services/`
- `/contact-us/`
- one service page like `/services/griha-pravesh-puja-bangalore/`
- `/sitemap.xml`
- `/robots.txt`

Also test:

- images load correctly
- WhatsApp and call buttons open correctly
- mobile layout looks good
- HTTPS is active

## 7. Update workflow

For future changes:

```bash
git add .
git commit -m "Update website"
git push
```

Cloudflare Pages will automatically rebuild and publish the new version.

## 8. Local pre-deploy test

Before pushing, you can verify the production build locally:

```bash
npm run build
```

Make sure the command finishes successfully and the `out/` folder is created.

## Troubleshooting

### Build fails on Cloudflare

- Confirm `package-lock.json` is committed.
- Confirm the build command is `npm run build`.
- Confirm the output directory is `out`.

### Routes open with 404

- Keep the build output directory as `out`.
- Do not change `trailingSlash: true` in `next.config.mjs`.
- Make sure `_redirects` is included in the final deployment.

### Static files are outdated

- Open the latest deployment in Cloudflare Pages and confirm it succeeded.
- Hard refresh the browser.
- Check that the newest GitHub commit reached the correct branch.

## Reference

I verified these settings against Cloudflare’s official docs for static Next.js Pages deployments and Pages `_redirects` / `_headers` support:

- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- https://developers.cloudflare.com/pages/configuration/redirects/
- https://developers.cloudflare.com/pages/configuration/headers/
