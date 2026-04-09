# cPanel Hosting Steps

This project is ready to upload as a Node.js app on cPanel with `server.js` as the startup file.

## 1. Upload the project

Upload the full project folder to your hosting account, for example:

- `northhindipandit.com/`

Do not upload these local development folders:

- `node_modules`
- `.next`
- `out`

## 2. Create the Node.js app in cPanel

Open cPanel and go to `Setup Node.js App`.

Use values like these:

- Node.js version: `18` or higher
- Application mode: `Production`
- Application root: `northhindipandit.com`
- Application URL: choose your domain or subdomain
- Application startup file: `server.js`

Then click `Create`.

## 3. Open the terminal in cPanel

Open `Terminal` in cPanel or connect through SSH, then go to your project folder:

```bash
cd ~/northhindipandit.com
```

## 4. Install dependencies

Run:

```bash
npm install
```

## 5. Build the Next.js project

Run:

```bash
npm run build
```

## 6. Set environment if needed

If cPanel shows an environment file option, keep:

```bash
NODE_ENV=production
```

Usually cPanel provides the `PORT` automatically. `server.js` already reads it.

## 7. Start the website

In `Setup Node.js App`, click:

- `Restart`

If there is a `Run NPM Install` button, you can use that before restarting.

## 8. Connect domain to the app

Point your domain or subdomain in cPanel to the Node.js application you created.

Examples:

- main domain: `https://northhindipandit.com`
- subdomain: `https://www.northhindipandit.com`

## 9. If the website does not open

Check these one by one:

- `server.js` is selected as startup file
- `npm install` completed without error
- `npm run build` completed without error
- Node.js version is `18+`
- app mode is `Production`
- domain is attached to the Node.js app
- click `Restart` after every upload or code change

## 10. For future updates

Whenever you change the code:

```bash
cd ~/northhindipandit.com
npm install
npm run build
```

Then click `Restart` in cPanel.

## Recommended upload contents

Upload these files and folders:

- `src/`
- `public/`
- `package.json`
- `package-lock.json`
- `next.config.mjs`
- `tsconfig.json`
- `next-env.d.ts`
- `postcss.config.cjs`
- `server.js`
- `README-CPANEL.md`

You do not need to upload:

- `node_modules/`
- `.next/`
- `out/`
- local log files
