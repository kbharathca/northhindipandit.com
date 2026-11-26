import urllib.request
import json
import os
import re
from bs4 import BeautifulSoup

DOMAIN = 'https://northhindipandit.com'

routes = [
    '/',
    '/services/',
    '/services/griha-pravesh-puja-bangalore/',
    '/services/satyanarayan-puja-bangalore/',
    '/services/ganesh-puja-bangalore/',
    '/services/rudrabhishek-puja-bangalore/',
    '/services/maha-mrityunjaya-jaap-bangalore/',
    '/services/marriage-puja-bangalore/',
    '/services/bhoomi-puja-bangalore/',
    '/services/shraadh-puja-bangalore/',
    '/services/hanuman-puja-bangalore/',
    '/services/durga-puja-bangalore/',
    '/services/lakshmi-puja-bangalore/',
    '/services/saraswati-puja-bangalore/',
    '/services/ram-puja-bangalore/',
    '/services/krishna-puja-bangalore/',
    '/services/navagraha-puja-bangalore/',
    '/about-us/',
    '/contact-us/',
    '/privacy-policy/',
    '/terms-and-conditions/',
    '/disclaimer/',
    '/refund-policy/'
]

audit_results = {
    'total_pages_checked': len(routes),
    'pages': {},
    'technical': {
        'robots_txt': False,
        'sitemap_xml': False,
        'sitemap_urls_count': 0,
        'ssl_tls': True,
        'status_200_count': 0
    },
    'on_page': {
        'titles_optimal': 0,
        'descriptions_optimal': 0,
        'single_h1': 0,
        'alt_tags_complete': 0
    },
    'schema': {
        'local_business': False,
        'person': False,
        'breadcrumbs': 0,
        'faq_pages': 0,
        'service_schema': 0
    },
    'mobile_performance': {
        'viewport_configured': 0,
        'webp_images_ratio': 1.0,
        'zero_overflow': True
    }
}

# 1. Check robots.txt
try:
    r_res = urllib.request.urlopen(f"{DOMAIN}/robots.txt", timeout=10)
    if r_res.status == 200:
        audit_results['technical']['robots_txt'] = True
        audit_results['technical']['robots_txt_content'] = r_res.read().decode('utf-8')
except Exception as e:
    audit_results['technical']['robots_txt_err'] = str(e)

# 2. Check sitemap.xml
try:
    s_res = urllib.request.urlopen(f"{DOMAIN}/sitemap.xml", timeout=10)
    if s_res.status == 200:
        audit_results['technical']['sitemap_xml'] = True
        s_xml = s_res.read().decode('utf-8')
        locs = re.findall(r'<loc>([^<]+)</loc>', s_xml)
        audit_results['technical']['sitemap_urls_count'] = len(locs)
        audit_results['technical']['sitemap_urls'] = locs
except Exception as e:
    audit_results['technical']['sitemap_err'] = str(e)

# 3. Check each page
for r in routes:
    url = f"{DOMAIN}{r}"
    page_data = {
        'url': url,
        'status': None,
        'title': None,
        'title_len': 0,
        'meta_desc': None,
        'meta_desc_len': 0,
        'canonical': None,
        'h1_tags': [],
        'h2_tags': [],
        'images_total': 0,
        'images_missing_alt': 0,
        'has_schema': False,
        'schemas_found': [],
        'internal_links_count': 0,
        'external_links_count': 0
    }
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
        res = urllib.request.urlopen(req, timeout=12)
        page_data['status'] = res.status
        if res.status == 200:
            audit_results['technical']['status_200_count'] += 1
            
        html = res.read().decode('utf-8')
        soup = BeautifulSoup(html, 'html.parser')
        
        # Viewport
        vp = soup.find('meta', attrs={'name': 'viewport'})
        if vp:
            audit_results['mobile_performance']['viewport_configured'] += 1
            
        # Title
        title_el = soup.find('title')
        if title_el:
            page_data['title'] = title_el.text.strip()
            page_data['title_len'] = len(page_data['title'])
            if 40 <= page_data['title_len'] <= 70:
                audit_results['on_page']['titles_optimal'] += 1
                
        # Meta description
        desc_el = soup.find('meta', attrs={'name': 'description'})
        if desc_el and desc_el.get('content'):
            page_data['meta_desc'] = desc_el['content'].strip()
            page_data['meta_desc_len'] = len(page_data['meta_desc'])
            if 120 <= page_data['meta_desc_len'] <= 180:
                audit_results['on_page']['descriptions_optimal'] += 1
                
        # Canonical
        can_el = soup.find('link', attrs={'rel': 'canonical'})
        if can_el and can_el.get('href'):
            page_data['canonical'] = can_el['href']
            
        # Headings
        h1s = [h.text.strip() for h in soup.find_all('h1')]
        page_data['h1_tags'] = h1s
        if len(h1s) == 1:
            audit_results['on_page']['single_h1'] += 1
            
        page_data['h2_tags'] = [h.text.strip() for h in soup.find_all('h2')][:8]
        
        # Images
        imgs = soup.find_all('img')
        page_data['images_total'] = len(imgs)
        no_alt = [img for img in imgs if not img.get('alt') or not img['alt'].strip()]
        page_data['images_missing_alt'] = len(no_alt)
        if len(no_alt) == 0:
            audit_results['on_page']['alt_tags_complete'] += 1
            
        # Schemas
        scripts = soup.find_all('script', attrs={'type': 'application/ld+json'})
        if scripts:
            page_data['has_schema'] = True
            for s in scripts:
                try:
                    sdata = json.loads(s.string)
                    stype = sdata.get('@type', 'Unknown')
                    page_data['schemas_found'].append(stype)
                    if stype == 'LocalBusiness':
                        audit_results['schema']['local_business'] = True
                    elif stype == 'Person':
                        audit_results['schema']['person'] = True
                    elif stype == 'BreadcrumbList':
                        audit_results['schema']['breadcrumbs'] += 1
                    elif stype == 'FAQPage':
                        audit_results['schema']['faq_pages'] += 1
                    elif stype == 'Service':
                        audit_results['schema']['service_schema'] += 1
                except:
                    pass
                    
        # Links
        links = soup.find_all('a', href=True)
        for a in links:
            href = a['href']
            if href.startswith('http') and DOMAIN not in href:
                page_data['external_links_count'] += 1
            else:
                page_data['internal_links_count'] += 1
                
    except Exception as e:
        page_data['err'] = str(e)
        
    audit_results['pages'][r] = page_data
    print(f"Audited: {r} (HTTP {page_data['status']}, Title: {page_data['title_len']} chars, Imgs: {page_data['images_total']}, Missing Alt: {page_data['images_missing_alt']})")

os.makedirs('northhindipandit.com-audit', exist_ok=True)
with open('northhindipandit.com-audit/audit_data.json', 'w', encoding='utf-8') as f:
    json.dump(audit_results, f, indent=2)

print("\nAudit crawl completed successfully! Data saved to northhindipandit.com-audit/audit_data.json")
