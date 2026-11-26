import urllib.request
import json
import xml.etree.ElementTree as ET

BASE_URL = "https://northhindipandit.com"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def check_url(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            content = resp.read()
            return {
                "url": url,
                "status": resp.status,
                "content_type": resp.headers.get("Content-Type"),
                "size_bytes": len(content),
                "ok": True,
                "data": content
            }
    except Exception as e:
        return {
            "url": url,
            "status": getattr(e, "code", str(e)),
            "content_type": None,
            "size_bytes": 0,
            "ok": False,
            "error": str(e)
        }

print("=== CHECKING PRODUCTION FAVICONS & MANIFESTS ===")
assets = [
    "/favicon.ico",
    "/favicon.svg",
    "/icon.png",
    "/apple-touch-icon.png",
    "/icon-192.png",
    "/icon-512.png",
    "/manifest.json",
    "/site.webmanifest",
    "/robots.txt",
    "/sitemap.xml"
]

results = {}
for asset in assets:
    res = check_url(BASE_URL + asset)
    results[asset] = {
        "status": res["status"],
        "content_type": res["content_type"],
        "size": res["size_bytes"],
        "ok": res["ok"]
    }
    print(f"{asset:25} | Status: {res['status']} | Type: {res['content_type']} | Size: {res['size_bytes']} bytes")

print("\n=== CHECKING SITEMAP.XML CONTENT & CANONICAL URLS ===")
sitemap_res = check_url(BASE_URL + "/sitemap.xml")
if sitemap_res["ok"]:
    root = ET.fromstring(sitemap_res["data"])
    # Handle namespaces
    namespaces = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    locs = [elem.text for elem in root.findall('.//ns:loc', namespaces)]
    if not locs:
        locs = [elem.text for elem in root.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    
    print(f"Total URLs in sitemap: {len(locs)}")
    all_have_slash = True
    url_audit = []
    for loc in locs:
        has_slash = loc.endswith('/')
        if not has_slash:
            all_have_slash = False
        url_audit.append({"url": loc, "has_trailing_slash": has_slash})
        print(f"  {'[PASS]' if has_slash else '[FAIL]'} {loc}")
    
    print(f"\nAll URLs have trailing slashes: {all_have_slash}")
else:
    print(f"Failed to fetch sitemap: {sitemap_res['error']}")

print("\n=== CHECKING HOMEPAGE HTML HEAD FOR FAVICON LINKS & CANONICAL ===")
home_res = check_url(BASE_URL + "/")
if home_res["ok"]:
    html_text = home_res["data"].decode('utf-8', errors='ignore')
    
    checks = {
        "favicon.ico mentioned": "favicon.ico" in html_text,
        "favicon.svg mentioned": "favicon.svg" in html_text,
        "apple-touch-icon mentioned": "apple-touch-icon" in html_text or "apple-icon" in html_text,
        "manifest mentioned": "manifest" in html_text,
        "canonical tag correct": '<link rel="canonical" href="https://northhindipandit.com/"' in html_text,
        "title present": "<title>" in html_text,
        "meta description present": '<meta name="description"' in html_text,
        "og:image present": '<meta property="og:image"' in html_text or '<meta name="twitter:image"' in html_text,
        "Facebook link present": "https://www.facebook.com/share/1EZDZJnDFo/" in html_text,
        "Phone 6206471543 present": "6206471543" in html_text,
    }
    for check_name, passed in checks.items():
        print(f"  {'[PASS]' if passed else '[FAIL]'} {check_name}")

print("\nAudit complete.")
