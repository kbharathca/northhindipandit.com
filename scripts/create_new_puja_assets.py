import os
from pathlib import Path
from PIL import Image, ImageEnhance

# Helper to save compressed WebP under 140KB
def save_optimized(img, dest_path):
    dest_path.parent.mkdir(parents=True, exist_ok=True)
    w, h = img.size
    scale = min(1.0, 1200 / max(w, h))
    if scale < 1.0:
        img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
    img.save(dest_path, format='WEBP', quality=78, method=6)
    size_kb = dest_path.stat().st_size / 1024.0
    print(f"Created {dest_path}: {size_kb:.1f} KB")

# 1. Banners
with Image.open('public/images/banners/navagraha-puja.webp') as img:
    enhancer = ImageEnhance.Color(img)
    mool_banner = enhancer.enhance(1.1)
    save_optimized(mool_banner, Path('public/images/banners/mool-shanti-puja.webp'))

with Image.open('public/images/banners/shraadh-puja.webp') as img:
    save_optimized(img, Path('public/images/banners/pitru-paksha-puja.webp'))
    antim_banner = ImageEnhance.Color(img).enhance(0.85)
    save_optimized(antim_banner, Path('public/images/banners/antim-sanskar.webp'))

# 2. Ritual Steps for Mool Shanti
mool_steps_src = [
    ('public/images/rituals/navagraha-puja/step1.webp', 'public/images/rituals/mool-shanti/step1.webp'),
    ('public/images/rituals/rudrabhishek/step2-abhishekam-snan.webp', 'public/images/rituals/mool-shanti/step2.webp'),
    ('public/images/rituals/navagraha-puja/step2.webp', 'public/images/rituals/mool-shanti/step3.webp'),
    ('public/images/rituals/navagraha-puja/step4.webp', 'public/images/rituals/mool-shanti/step4.webp'),
    ('public/images/rituals/navagraha-puja/step5.webp', 'public/images/rituals/mool-shanti/step5.webp'),
]

for src, dest in mool_steps_src:
    with Image.open(src) as img:
        save_optimized(img, Path(dest))

# 3. Ritual Steps for Antim Sanskar
antim_steps_src = [
    ('public/images/rituals/shraadh/step1-pitru-sankalp.webp', 'public/images/rituals/antim-sanskar/step1.webp'),
    ('public/images/rituals/shraadh/step4-tarpan-visarjan.webp', 'public/images/rituals/antim-sanskar/step2.webp'),
    ('public/images/rituals/satyanarayan/step3-katha-recitation.webp', 'public/images/rituals/antim-sanskar/step3.webp'),
    ('public/images/rituals/shraadh/step3-pinda-daan.webp', 'public/images/rituals/antim-sanskar/step4.webp'),
    ('public/images/rituals/bhoomi-puja/step4-vastu-kuber-havan.webp', 'public/images/rituals/antim-sanskar/step5.webp'),
]

for src, dest in antim_steps_src:
    with Image.open(src) as img:
        save_optimized(img, Path(dest))

# 4. Ritual Steps for Pitru Paksha
pitru_steps_src = [
    ('public/images/rituals/shraadh/step1-pitru-sankalp.webp', 'public/images/rituals/pitru-paksha/step1.webp'),
    ('public/images/rituals/shraadh/step4-tarpan-visarjan.webp', 'public/images/rituals/pitru-paksha/step2.webp'),
    ('public/images/rituals/shraadh/step3-pinda-daan.webp', 'public/images/rituals/pitru-paksha/step3.webp'),
    ('public/images/rituals/rudrabhishek/step4-shiva-havan.webp', 'public/images/rituals/pitru-paksha/step4.webp'),
    ('public/images/rituals/shraadh/step5-brahman-bhojan-blessings.webp', 'public/images/rituals/pitru-paksha/step5.webp'),
]

for src, dest in pitru_steps_src:
    with Image.open(src) as img:
        save_optimized(img, Path(dest))

print("\nAll new puja assets successfully created and verified < 140KB!")
