# Search Engine Verification Guide

This guide helps you verify your website with major search engines and claim your business.

## 🔍 Google Search Console

### Step 1: Access Google Search Console
1. Go to: https://search.google.com/search-console
2. Click "Start Now" or sign in with your Google account

### Step 2: Add Your Property
1. Click the dropdown arrow next to your project name
2. Click "Add Property"
3. Select "URL prefix"
4. Enter: `https://northhindipandit.com`
5. Click "Continue"

### Step 3: Verify Ownership - Method 1: HTML Meta Tag (Recommended)
1. Google will show a meta tag like: `<meta name="google-site-verification" content="..." />`
2. Copy the `content` value (the long alphanumeric string)
3. Open `src/app/layout.tsx` in your code editor
4. Find this line in the metadata:
   ```typescript
   verification: {
     google: 'add-your-google-search-console-code-here',
   ```
5. Replace `'add-your-google-search-console-code-here'` with your Google verification code
6. Example:
   ```typescript
   verification: {
     google: 'abc123def456xyz789',
   ```
7. Save the file
8. Run: `npm run build:static`
9. Upload the new `out/` folder to your hosting
10. Go back to Google Search Console and click "Verify"

### Step 4: Verify Ownership - Method 2: Sitemap (Alternative)
1. If HTML tag verification fails, click "Verify another method"
2. Select "Sitemap"
3. Click "Continue"
4. Enter: `https://northhindipandit.com/sitemap.xml`
5. Click "Submit"
6. Google will verify automatically

### Step 5: Submit Sitemap to Google
1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Click "Add/test sitemap"
3. Enter: `sitemap.xml` (the field auto-fills the domain)
4. Click "Submit"
5. Google will start crawling your pages

### Step 6: Request Indexing
1. In Google Search Console, go to **URL Inspection** (top search bar)
2. Enter: `https://northhindipandit.com`
3. Click "Request Indexing"
4. Repeat for:
   - `https://northhindipandit.com/services`
   - `https://northhindipandit.com/contact-us`
   - A few service pages like `https://northhindipandit.com/services/griha-pravesh-puja-bangalore`

### Step 7: Monitor Performance
- **Performance**: Check clicks, impressions, and average position
- **Coverage**: See if all pages are indexed
- **Enhancements**: Check rich results (structured data)
- **Mobile Usability**: Verify no mobile issues

---

## 🔎 Bing Webmaster Tools

### Step 1: Access Bing Webmaster Tools
1. Go to: https://www.bing.com/webmaster
2. Click "Sign in" with your Microsoft account (or create one)

### Step 2: Add Your Site
1. Click "Add a site"
2. Enter: `https://northhindipandit.com`
3. Click "Add"

### Step 3: Verify Ownership - Method 1: XML File (Recommended)
1. Bing provides a file like: `BingSiteAuth.xml`
2. For static sites, you can't directly upload this
3. Use Method 2 instead (Meta tag)

### Step 3: Verify Ownership - Method 2: Meta Tag
1. Click "Verify ownership"
2. Select "Meta tag"
3. Copy the meta tag provided
4. Add it to `src/app/layout.tsx`:
   ```typescript
   verification: {
     other: {
       'msvalidate.01': 'your-bing-code-here',
     }
   ```
5. Save, build, and upload
6. Return to Bing and click "Verify"

### Step 4: Submit Sitemap to Bing
1. Go to **Sitemaps** in Bing Webmaster Tools
2. Click "Submit Sitemap"
3. Enter: `https://northhindipandit.com/sitemap.xml`
4. Click "Submit"

### Step 5: Monitor
- **Dashboard**: Overview of crawl and indexing stats
- **Search Keywords**: Top searches driving traffic
- **Crawl Info**: Crawl statistics and errors
- **URL Inspection**: Check specific page crawl status

---

## 🔔 Yandex Webmaster (Optional, for Russian Traffic)

If you want to reach Russian/Eastern Europe traffic:

### Step 1: Access Yandex.Webmaster
1. Go to: https://webmaster.yandex.com
2. Sign up with email

### Step 2: Add Your Site
1. Click "Add site"
2. Enter: `https://northhindipandit.com`

### Step 3: Verify via Meta Tag
1. Get the verification code
2. Add to `src/app/layout.tsx`:
   ```typescript
   verification: {
     other: {
       'yandex-verification': 'your-yandex-code-here',
     }
   ```

### Step 4: Submit Sitemap
In Yandex, go to **Sitemaps** and submit: `https://northhindipandit.com/sitemap.xml`

---

## 📊 Google Analytics 4 (GA4) Setup

To track visitor behavior:

### Step 1: Create GA4 Property
1. Go to: https://analytics.google.com
2. Click "Create"
3. Choose "Website"
4. Enter website name: "North Hindi Pandit"
5. Enter website URL: `https://northhindipandit.com`
6. Select timezone and currency

### Step 2: Get Measurement ID
1. In Analytics, go to **Admin** → **Property** → **Data Streams**
2. Click the web stream
3. Find "Measurement ID" (like: `G-XXXXXXXXXX`)

### Step 3: Add to Your Website
For static HTML files (out/ folder), add this to `public/index.html` (or each HTML file):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Or use our script to auto-inject this to all files after build.

### Step 4: Verify Tracking
1. Go to the Analytics dashboard
2. Open in real-time mode
3. Visit your website
4. You should see traffic appear within seconds

---

## 🔐 HTTPS/SSL Certificate

Your site should use HTTPS (already required for ranking).

### Verify SSL:
1. Open your site: https://northhindipandit.com
2. Look for the 🔒 padlock icon in browser URL bar
3. Click it to see certificate details

### If SSL is missing, contact your hosting provider to:
- Issue an SSL certificate (usually free via Let's Encrypt)
- Set up HTTPS redirect (http → https)

---

## ✅ Final SEO Checklist

After verification, ensure:
- ✅ Sitemap submitted to Google, Bing, Yandex
- ✅ Homepage indexed in Google Search Console
- ✅ Schema.org structured data validated
- ✅ Mobile-friendly test passed
- ✅ Page speed good (>50 on PageSpeed Insights)
- ✅ No indexing errors in Coverage report
- ✅ All images loading correctly
- ✅ Internal links working
- ✅ Contact form functional

---

## 🚀 Expected Timeline

- **Indexing:** 3-14 days for homepage
- **Ranking:** 3-6 months for competitive keywords
- **Traffic:** 50-200 monthly visitors after 3 months (depends on content)
- **Conversions:** 5-20 leads/month after 6 months

---

## 📞 Support Resources

- **Google Search Central:** https://developers.google.com/search
- **Bing Webmaster Help:** https://www.bing.com/webmaster/help
- **Yandex Documentation:** https://yandex.com/support/webmaster/
- **Schema.org Markup:** https://schema.org/LocalBusiness

---

**Last Updated:** April 2026  
**Website:** https://northhindipandit.com
