# Complete Deployment Guide for North Hindi Pandit Website

This guide explains all the ways to deploy the North Hindi Pandit website and helps you choose the best option for your needs.

---

## 🎯 Quick Decision Guide

| Method | Complexity | Cost | Terminal Access Needed? | Best For |
|--------|-----------|------|-------------------------|----------|
| 🚀 **Netlify** | Very Easy | Free tier available | No | Everyone (recommended) |
| 📁 **cPanel Static** | Easy | $5-15/month | No | Shared hosting users |
| 📁 **Plesk Static** | Easy | $5-15/month | No | Shared hosting users |
| 💻 **cPanel Node.js** | Medium | $5-15/month | Yes (SSH) | Advanced users |
| 💻 **Plesk Node.js** | Medium | $5-15/month | Yes (SSH) | Advanced users |
| 🐳 **Docker** | Hard | $5+/month | Yes | DevOps experts |

---

## ✅ Option 1: Netlify (RECOMMENDED)

**Best for:** Most users, easiest deployment, automatic updates

### Pros:
- ✓ Free with generous limits
- ✓ Automatic deployments when you push to GitHub
- ✓ Automatic HTTPS/SSL
- ✓ Global CDN for fast loading
- ✓ No deployment files to manage
- ✓ Works with git (GitHub)

### Cons:
- ✗ Domain needs to point to Netlify (or use subdomain)
- ✗ Requires GitHub account

### Quick Setup:
1. Push your code to GitHub (already done: https://github.com/kbharathca/northhindipandit.com)
2. Sign up at https://netlify.com (free)
3. Connect your GitHub repo
4. Netlify automatically deploys on every push
5. Point your domain to Netlify

**Time needed:** 5-10 minutes

**More info:** See [Netlify Deployment Documentation](https://docs.netlify.com)

---

## 📁 Option 2: cPanel + Static HTML (NO TERMINAL)

**Best for:** Shared hosting users without terminal access

### Pros:
- ✓ No terminal needed - use file manager or FTP
- ✓ Works on any cPanel hosting
- ✓ Fast, simple HTML files
- ✓ Low server requirements
- ✓ Works with your existing domain

### Cons:
- ✗ Manual upload required for updates
- ✗ Need to download and re-upload files

### Quick Setup:
1. On your computer, run: `npm run build:static`
2. Upload the `out/` folder to cPanel's `public_html` via FTP
3. Done!

**Time needed:** 10-15 minutes per deployment

**More info:** See [cPanel Hosting Guide](README-CPANEL.md)

---

## 📁 Option 3: Plesk + Static HTML (NO TERMINAL)

**Best for:** Plesk-hosted websites without terminal access

### Pros:
- ✓ No terminal needed - use file manager or FTP
- ✓ Works on any Plesk hosting
- ✓ Fast, simple HTML files
- ✓ Low server requirements
- ✓ Works with your existing domain

### Cons:
- ✗ Manual upload required for updates
- ✗ Need to download and re-upload files

### Quick Setup:
1. On your computer, run: `npm run build:static`
2. Upload the `out/` folder to Plesk's `httpdocs` via FTP
3. Done!

**Time needed:** 10-15 minutes per deployment

**More info:** See [Plesk Hosting Guide](README-PLESK.md)

---

## 💻 Option 4: cPanel + Node.js (TERMINAL REQUIRED)

**Best for:** Advanced users with cPanel SSH/terminal access

### Pros:
- ✓ Full Node.js app running
- ✓ More features available (if needed in future)
- ✓ Automatic restarts
- ✓ Scalable

### Cons:
- ✗ Requires terminal/SSH access
- ✗ More setup required
- ✗ Slower than static HTML

### Quick Setup:
1. Upload source files via FTP
2. SSH into server
3. Run: `npm install && npm run build`
4. Configure Node.js app in cPanel
5. Restart app

**Time needed:** 20-30 minutes setup, 5 minutes per update

**More info:** See [cPanel Hosting Guide](README-CPANEL.md) - Method 2

---

## 💻 Option 5: Plesk + Node.js (TERMINAL REQUIRED)

**Best for:** Advanced Plesk users with terminal access

### Pros:
- ✓ Full Node.js app running
- ✓ More features available (if needed in future)
- ✓ Plesk management panel

### Cons:
- ✗ Requires terminal/SSH access
- ✗ More setup required
- ✗ Slower than static HTML

### Quick Setup:
1. Upload source files via FTP
2. SSH into server
3. Run: `npm install && npm run build`
4. Configure Node.js app in Plesk
5. Restart app

**Time needed:** 20-30 minutes setup, 5 minutes per update

**More info:** See [Plesk Hosting Guide](README-PLESK.md) - Method 2

---

## 🐳 Option 6: Docker + VPS

**Best for:** Developers familiar with Docker and VPS hosting

### Pros:
- ✓ Complete control
- ✓ Scalable
- ✓ Freezes environment (no version issues)

### Cons:
- ✗ Requires technical knowledge
- ✗ Requires devops expertise

### Quick Setup:
1. Create Dockerfile (not included)
2. Build and push to Docker Registry
3. Deploy on VPS with Docker support

**Time needed:** 1-2 hours setup

**Not covered in this guide** - see Docker documentation

---

## 📊 Comparison Table

| Feature | Netlify | cPanel Static | Plesk Static | cPanel Node.js | Plesk Node.js |
|---------|---------|---------------|--------------|----------------|---------------|
| Cost | Free* | $5-15/mo | $5-15/mo | $5-15/mo | $5-15/mo |
| Terminal needed | No | No | No | Yes | Yes |
| Setup time | 5 min | 10 min | 10 min | 30 min | 30 min |
| Update time | Auto | 10 min | 10 min | 5 min | 5 min |
| SSL/HTTPS | Yes | Yes | Yes | Yes | Yes |
| Performance | Excellent | Very Good | Very Good | Good | Good |
| Maintenance | None | Minimal | Minimal | Low | Low |
| Scalability | Excellent | Limited | Limited | Medium | Medium |

*Netlify free tier: 1 site, 1 team, 10 concurrent builds, 300 build minutes/month

---

## 🚀 Recommended Approach for You

Based on your situation (no terminal access), we recommend:

### Primary: Netlify
- No terminal needed
- Automatic deployments
- Free
- No maintenance

### Backup: cPanel Static or Plesk Static
- Use if your domain is already on cPanel/Plesk
- No terminal needed
- Manual updates required

### Steps:
1. **Try Netlify first** (fastest, most modern)
2. **If Netlify doesn't work**, use cPanel/Plesk static deployment
3. **Never need terminal or SSH**

---

## 📋 Deployment Checklist

### Before Deploying:
- [ ] `npm install` ran successfully
- [ ] `npm run build` or `npm run build:static` completed without errors
- [ ] Your domain points to the hosting service
- [ ] You have FTP credentials (for cPanel/Plesk)
- [ ] Images appear correctly in your local browser

### After Deploying:
- [ ] Website is accessible at your domain
- [ ] All images load correctly
- [ ] Navigation works (click service pages, contact form, etc.)
- [ ] Mobile view works correctly
- [ ] SSL/HTTPS shows padlock icon

---

## 🔄 Your Workflow for Updates

### Netlify:
1. Make code changes locally
2. Run: `npm run build` (to test locally)
3. Push to GitHub: `git add . && git commit -m "message" && git push`
4. **Done!** Netlify auto-deploys

### cPanel/Plesk Static:
1. Make code changes locally
2. Run: `npm run build:static`
3. Upload `out/` folder via FTP to hosting
4. **Done!**

### cPanel/Plesk Node.js:
1. Make code changes locally
2. Upload `src/` and `public/` via FTP
3. SSH to server
4. Run: `npm install && npm run build && restart`

---

## 📞 Support & Help

**Having issues?**

1. **Check the specific guide:**
   - [Netlify Documentation](https://docs.netlify.com)
   - [cPanel Guide](README-CPANEL.md)
   - [Plesk Guide](README-PLESK.md)

2. **Common problems:**
   - Images not showing: Verify `public/images/` was uploaded
   - 404 errors: Check trailing slashes (site.com/services/ not site.com/services)
   - Build errors: Ensure Node.js 18+ is installed locally

3. **Still stuck?**
   - Check your hosting provider's support
   - Reach out to the provider (Netlify, cPanel host, Plesk host)

---

## 🎓 How to Deploy Step-by-Step

### For Netlify (Recommended):

**Step 1: Connect GitHub to Netlify**
```
1. Go to netlify.com
2. Click "Sign up"
3. Choose "GitHub" as provider
4. Authorize Netlify
5. Click "Import an existing project"
6. Select repository: northhindipandit.com
7. Netlify auto-fills settings - click "Deploy site"
8. Wait 2-3 minutes for build
9. Your site is live!
```

**Step 2: Point Domain to Netlify**
```
1. In Netlify, go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Enter: northhindipandit.com
4. Verify you own the domain
5. Update your domain's DNS to point to Netlify
```

### For cPanel Static (No Terminal):

**Step 1: Create Static Files**
```
On your computer, open terminal in project folder:
npm run build:static
```

**Step 2: Upload via FTP**
```
1. Open FileZilla (or other FTP client)
2. Connect with FTP info from cPanel
3. Navigate to public_html
4. Upload all files from the "out/" folder
5. Wait for upload to complete
6. Done!
```

---

## 💡 Key Files & Folders

When deploying, you'll need:

**For Static builds** (`npm run build:static`):
- Creates: `out/` folder with HTML, CSS, JS, images

**For Netlify**:
- Uses: `src/` folder and `next.config.mjs`
- No need to upload anything - GitHub handles it

**For cPanel/Plesk Node.js**:
- Upload: `src/`, `public/`, `package.json`, config files
- Don't upload: `node_modules`, `.next`, `out`, `scripts`

---

## ✨ Next Steps

1. **Choose your deployment method** from options above
2. **Follow the specific guide** (Netlify / cPanel / Plesk)
3. **Test your website** after deployment
4. **Make updates** using the workflow for your method

**Need help?** Each deployment method has a dedicated guide with screenshots and troubleshooting steps.

---
