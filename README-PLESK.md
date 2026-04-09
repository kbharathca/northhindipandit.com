# Plesk Hosting - Complete Setup Guide

This guide covers **two deployment methods** for North Hindi Pandit on Plesk:
1. **Static HTML Export** (No terminal access needed) - Recommended for most users
2. **Node.js App** (Requires terminal access)

---

## 🚀 Method 1: Static HTML Export (NO TERMINAL ACCESS NEEDED)

This method is perfect if you **don't have SSH/terminal access** to Plesk. The website will be served as static HTML files.

### 1. Build the Static Website on Your Computer

On your local machine (Windows/Mac/Linux), open a terminal in the project folder and run:

```bash
npm install
npm run build:static
```

This creates an `out/` folder with all the HTML files ready to upload.

### 2. Download FTP Client

Download and install one of these (free):
- **FileZilla** (https://filezilla-project.org) - Most popular
- **WinSCP** (https://winscp.net) - Windows only
- **Cyberduck** (https://cyberduck.io) - Mac/Windows

### 3. Connect to Plesk via FTP

In Plesk Panel:
1. Go to **Files** → **FTP Accounts**
2. Create a new FTP account or use existing credentials
3. Note the FTP hostname, username, and password

Open your FTP client and enter:
- **Host:** FTP server address from Plesk
- **Username:** FTP username
- **Password:** FTP password
- **Port:** 21 (FTP) or 22 (SFTP if available)

Click **Connect**.

### 4. Upload the Website

1. In your FTP client, navigate to the `httpdocs` folder (Plesk's public web directory)
2. Clear out any old files from previous deployments
3. Upload all files from the `out/` folder to `httpdocs`
   - Double-click `out/` in your file explorer
   - Select all files inside (Ctrl+A)
   - Drag and drop into the FTP `httpdocs` folder
   - Wait for upload to complete ✓

**Important folders to upload:**
- `_next/` (Next.js optimized assets)
- `images/` (puja images)
- `robots.txt`
- `favicon.svg`
- All `.html` files (index.html, etc.)

### 5. Verify Upload in Plesk

In Plesk, go to **Files** → **File Manager**:
- Navigate to `httpdocs`
- You should see the same files that you uploaded
- If no files show, refresh the page

### 6. Set Permissions in Plesk

In Plesk **File Manager**:
1. Right-click `httpdocs` folder
2. Click **Permissions**
3. Set to: `755` (read/execute for all)
4. For files: `644` (read for all)

### 7. Test Your Website

Open your domain in a browser:
- https://yourdomain.com

Your website should be live! ✓

### 8. Future Updates (No Terminal)

When you update the website:
1. On your computer, run: `npm run build:static`
2. Upload the `out/` folder contents to `httpdocs` (replace old files)
3. Clear browser cache (Ctrl+Shift+Delete)
4. Refresh your website in the browser

---

## 🖥️ Method 2: Node.js App (Requires SSH/Terminal Access)

Use this method if your Plesk account has **SSH terminal access** enabled.

### 1. Prepare Project Files Locally

Remove build artifacts:
```bash
rm -rf node_modules out .next dist
```

### 2. Upload Files via FTP

Use FileZilla or similar FTP client to upload to `httpdocs`:
- Create a folder like `northhindipandit/`
- Upload these files into that folder:
  - `src/`
  - `public/`
  - `package.json`
  - `package-lock.json`
  - `next.config.mjs`
  - `tsconfig.json`
  - `postcss.config.cjs`
  - `next-env.d.ts`

Do NOT upload:
- `node_modules/`
- `.next/`
- `out/`
- `legacy_src_backup/`

### 3. Access Terminal in Plesk

In Plesk Panel:
1. Go to **Tools & Settings** → **Terminal**
2. Or use SSH client (PuTTY, Terminal.app) with Plesk SSH credentials

Connect and navigate:
```bash
cd /var/www/vhosts/yourdomain.com/httpdocs/northhindipandit
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Build the Project

```bash
npm run build
```

### 6. Setup Node.js in Plesk

In Plesk Panel:
1. Go to **Node.js** (or **Applications**)
2. Click **Add Node.js App**
3. Configure:
   - **Path:** `/northhindipandit` (the folder you uploaded)
   - **Node.js version:** 18.x or higher
   - **Document root:** Leave as suggested
   - **Startup file:** Leave blank

4. Click **Create**

### 7. Start the Application

The Node.js app should start automatically. If not:
- Go back to **Node.js** settings
- Click the toggle to enable the app

### 8. Connect Domain

In Plesk, go to **Websites & Domains**:
- Select your domain
- Under **Hosting** settings, ensure it points to the Node.js app

### 9. For Future Updates

```bash
cd /var/www/vhosts/yourdomain.com/httpdocs/northhindipandit
npm install
npm run build
```

The Node.js app will restart automatically.

---

## 📋 Troubleshooting

### Static HTML Method
- **Files not showing up:** Make sure you're uploading to `httpdocs`, not a subfolder
- **404 errors:** Check that trailing slashes are in URLs (site.com/services/ not site.com/services)
- **Images not loading:** Verify `_next/` and `images/` folders were uploaded
- **Permission denied:** Check file permissions - should be `644` for files, `755` for folders

### Node.js Method
- **App not starting:** Check logs in Plesk → **Node.js** → **Logs**
- **Port conflicts:** Plesk automatically assigns ports
- **Build fails:** Ensure Node.js version is 18+ in Plesk settings
- **Domain not connecting:** Verify domain is pointed to Node.js app in Hosting settings

---

## 💡 Which Method to Choose?

- **Static HTML (Method 1):** Simple, fast, no terminal needed ✓ RECOMMENDED for most users
- **Node.js (Method 2):** More features, but requires terminal access

---

## 📞 Support

If you encounter issues:
1. Check your Plesk provider's documentation
2. Verify Node.js version (18+) if using Method 2
3. Ensure FTP credentials are correct for Method 1
4. Reset Plesk Node.js app settings and redeploy

---
