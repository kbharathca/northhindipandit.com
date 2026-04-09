# cPanel Hosting - Complete Setup Guide

This guide covers **two deployment methods** for North Hindi Pandit on cPanel:
1. **Static HTML Export** (No terminal access needed) - Recommended for most users
2. **Node.js App** (Requires terminal access)

---

## 🚀 Method 1: Static HTML Export (NO TERMINAL ACCESS NEEDED)

This method is perfect if you **don't have SSH/terminal access** to cPanel. The website will be served as static HTML files.

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

### 3. Connect to cPanel via FTP

In cPanel, go to **FTP Accounts** and create an FTP account or find existing credentials.

Open your FTP client and enter:
- **Host:** your domain (e.g., `northhindipandit.com`) or FTP server address
- **Username:** FTP username from cPanel
- **Password:** FTP password from cPanel
- **Port:** 21 (standard FTP) or 22 (SFTP if available)

Click **Connect**.

### 4. Upload the Website

1. In your FTP client, navigate to the `public_html` folder
2. Clear out any old files from previous deployments
3. Upload all files from the `out/` folder to `public_html`
   - Double-click `out/` in your file explorer
   - Select all files inside (Ctrl+A)
   - Drag and drop into the FTP `public_html` folder
   - Wait for upload to complete ✓

**Important folders to upload:**
- `_next/` (Next.js optimized assets)
- `images/` (puja images)
- `robots.txt`
- `favicon.svg`
- All `.html` files (index.html, etc.)

### 5. Verify Upload in cPanel

Go to **File Manager** in cPanel:
- Navigate to `public_html`
- You should see the same files that you uploaded
- If no files show, refresh the page

### 6. Test Your Website

Open your domain in a browser:
- https://northhindipandit.com

Your website should be live! ✓

### 7. Future Updates (No Terminal)

When you update the website:
1. On your computer, run: `npm run build:static`
2. Upload the `out/` folder contents to `public_html` (replace old files)
3. Wait 5-10 seconds for cache to clear
4. Refresh your website in the browser

---

## 🖥️ Method 2: Node.js App (Requires SSH/Terminal Access)

Use this method if your cPanel account has **SSH terminal access** enabled.

### 1. Prepare Project Files Locally

Remove build artifacts:
```bash
rm -rf node_modules out .next dist
```

### 2. Upload Files via FTP

Use FileZilla or similar FTP client to upload to `public_html`:
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

### 3. Access Terminal in cPanel

In cPanel, find **Terminal** or use SSH client (PuTTY, Terminal.app):

```bash
cd ~/public_html
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Build the Project

```bash
npm run build
```

### 6. Setup Node.js in cPanel

In cPanel, go to **Setup Node.js App**:
- **Node.js version:** 18 or higher
- **Application mode:** Production
- **Application root:** Navigate to your project folder
- **Application URL:** Select your domain
- **Startup file:** Leave blank (cPanel will detect next.config.mjs)

Click **Create**.

### 7. Start the Application

Click **Restart** in the Node.js app panel.

### 8. Connect Domain

Point your domain to the Node.js application through cPanel's domain management.

### 9. For Future Updates

```bash
cd ~/public_html
npm install
npm run build
```

Then click **Restart** in cPanel's Node.js app panel.

---

## 📋 Troubleshooting

### Static HTML Method
- **Files not showing up:** Make sure you're uploading to `public_html`, not a subfolder
- **404 errors:** Check that trailing slashes are in URLs (site.com/services/ not site.com/services)
- **Images not loading:** Verify `_next/` and `images/` folders were uploaded

### Node.js Method
- **App not starting:** Check error logs in cPanel Node.js app panel
- **Port conflicts:** cPanel automatically assigns a port
- **Build fails:** Ensure Node.js version is 18+ in cPanel

---

## 💡 Which Method to Choose?

- **Static HTML (Method 1):** Simple, fast, no terminal needed ✓ RECOMMENDED for most users
- **Node.js (Method 2):** More features, but requires terminal access

---

You do not need to upload:

- `node_modules/`
- `.next/`
- `out/`
- local log files
