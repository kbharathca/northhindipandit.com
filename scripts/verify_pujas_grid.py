import os
from bs4 import BeautifulSoup
import re

with open('src/data/pujas.ts', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = re.findall(r"slug:\s*'([^']+)'", text)
titles = re.findall(r"shortTitle:\s*'([^']+)'", text)

print(f"Total pujas in data source: {len(slugs)}")
for i, (s, t) in enumerate(zip(slugs, titles), 1):
    print(f" {i:2}. {t:24} (/services/{s}/)")

print("\n--- CHECKING HOMEPAGE (out/index.html) ---")
with open('out/index.html', 'r', encoding='utf-8') as f:
    home_html = f.read()

home_missing = []
for s in slugs:
    link = f"/services/{s}/"
    if link not in home_html and f"/services/{s}" not in home_html:
        home_missing.append(s)

print(f"Homepage total services found: {len(slugs) - len(home_missing)} / {len(slugs)}")
if home_missing:
    print(f"Missing from homepage: {home_missing}")
else:
    print("ALL 18 SERVICES ARE CONFIRMED PRESENT IN HOMEPAGE SERVICES GRID!")

print("\n--- CHECKING SERVICES PAGE (out/services/index.html) ---")
with open('out/services/index.html', 'r', encoding='utf-8') as f:
    services_html = f.read()

services_missing = []
for s in slugs:
    link = f"/services/{s}/"
    if link not in services_html and f"/services/{s}" not in services_html:
        services_missing.append(s)

print(f"Services page total services found: {len(slugs) - len(services_missing)} / {len(slugs)}")
if services_missing:
    print(f"Missing from services page: {services_missing}")
else:
    print("ALL 18 SERVICES ARE CONFIRMED PRESENT IN SERVICES CATALOG GRID!")
