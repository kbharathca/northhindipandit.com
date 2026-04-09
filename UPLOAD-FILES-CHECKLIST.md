# Quick Reference - What to Upload

Simple checklist for deploying the website.

---

## 🚀 Netlify Deployment

**Setup (One Time):**
- [ ] GitHub account (already have: https://github.com/kbharathca/northhindipandit.com)
- [ ] Netlify account (free at netlify.com)
- [ ] Connect GitHub to Netlify
- [ ] Point domain to Netlify

**Updates:**
- Just push code to GitHub - Netlify deploys automatically!

---

## 📁 cPanel Static HTML (NO TERMINAL)

**Build on your computer:**
```
npm run build:static
```

**Upload this folder to cPanel:**
```
public_html/  <- Everything from the "out/" folder
├── index.html
├── favicon.svg
├── robots.txt
├── images/
├── _next/
├── services/
└── contact-us/
```

**Upload method:**
- Use FileZilla (FTP client) or cPanel File Manager
- Upload the contents of `out/` folder to `public_html`

**Time per update:** 5-10 minutes

**Full guide:** See [README-CPANEL.md](README-CPANEL.md)

---

## 📁 Plesk Static HTML (NO TERMINAL)

**Build on your computer:**
```
npm run build:static
```

**Upload this folder to Plesk:**
```
httpdocs/  <- Everything from the "out/" folder
├── index.html
├── favicon.svg
├── robots.txt
├── images/
├── _next/
├── services/
└── contact-us/
```

**Upload method:**
- Use FileZilla (FTP client) or Plesk File Manager
- Upload the contents of `out/` folder to `httpdocs`

**Time per update:** 5-10 minutes

**Full guide:** See [README-PLESK.md](README-PLESK.md)

---

## 💻 cPanel Node.js (TERMINAL REQUIRED)

**Upload via FTP to public_html:**
```
public_html/
├── src/                    <- Entire folder
├── public/                 <- Entire folder
├── package.json
├── package-lock.json
├── next.config.mjs
├── tsconfig.json
├── postcss.config.cjs
└── next-env.d.ts

Do NOT upload:
- node_modules/
- .next/
- out/
```

**On the server (via SSH):**
```bash
cd ~/public_html
npm install
npm run build

# Then configure in cPanel → Setup Node.js App
```

**Time per update:** 10-15 minutes

**Full guide:** See [README-CPANEL.md](README-CPANEL.md) - Method 2

---

## 💻 Plesk Node.js (TERMINAL REQUIRED)

**Upload via FTP to httpdocs:**
```
httpdocs/northhindipandit/
├── src/                    <- Entire folder
├── public/                 <- Entire folder
├── package.json
├── package-lock.json
├── next.config.mjs
├── tsconfig.json
├── postcss.config.cjs
└── next-env.d.ts

Do NOT upload:
- node_modules/
- .next/
- out/
```

**On the server (via SSH):**
```bash
cd httpdocs/northhindipandit
npm install
npm run build

# Then configure in Plesk → Node.js App
```

**Time per update:** 10-15 minutes

**Full guide:** See [README-PLESK.md](README-PLESK.md) - Method 2

---

## 📊 File Size Reference

**After `npm run build:static`:**
- `out/` folder: ~5-8 MB total
- Largest file: `_next/static/chunks/` (~2 MB)
- Use FTP compression for faster upload

**Typical upload time:**
- Static HTML: 2-5 minutes (with FTP)
- Your files: depends on connection speed

---

## ✅ After Upload Checklist

- [ ] Website loads at your domain
- [ ] Images appear correctly
- [ ] Links work (click pages)
- [ ] Mobile version works
- [ ] HTTPS/secure padlock shows

---

## 🆘 Troubleshooting

### Files not showing up
→ Verify you're uploading to correct folder: `public_html` (cPanel) or `httpdocs` (Plesk)

### 404 errors
→ Check that URLs have trailing slashes: `domain.com/services/` not `domain.com/services`

### Images not loading
→ Ensure `_next/` and `images/` folders were uploaded completely

### Build fails locally
→ Run: `npm install` then `npm run build:static` again

---

## 📞 Need Help?

1. **Check deployment guide:** [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)
2. **For cPanel:** [README-CPANEL.md](README-CPANEL.md)
3. **For Plesk:** [README-PLESK.md](README-PLESK.md)
4. **For Netlify:** [Netlify Docs](https://docs.netlify.com)

---
