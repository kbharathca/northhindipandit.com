import os
import io
from pathlib import Path
from PIL import Image

TARGET_MAX_KB = 140.0  # Safe ceiling below 150 KB
MAX_DIM = 1200         # High-resolution retina cap

def compress_image(path: Path):
    orig_size = path.stat().st_size
    orig_kb = orig_size / 1024.0
    
    # Only compress if larger than TARGET_MAX_KB
    if orig_kb <= TARGET_MAX_KB:
        return None
    
    ext = path.suffix.lower()
    
    with Image.open(path) as img:
        # Convert RGBA to RGB if saving as lossy WebP and no actual transparency is used,
        # or preserve RGBA
        mode = img.mode
        w, h = img.size
        
        # Resize if dimensions exceed MAX_DIM
        scale = min(1.0, MAX_DIM / max(w, h))
        if scale < 1.0:
            new_w = int(w * scale)
            new_h = int(h * scale)
            work_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        else:
            work_img = img.copy()
            
        best_data = None
        best_size = orig_size
        
        # Iteratively try qualities
        for q in [82, 78, 75, 72, 68, 65, 60, 55, 50]:
            buf = io.BytesIO()
            if ext == '.webp':
                work_img.save(buf, format='WEBP', quality=q, method=6)
            elif ext in ('.jpg', '.jpeg'):
                work_img.save(buf, format='JPEG', quality=q, optimize=True)
            elif ext == '.png':
                work_img.save(buf, format='PNG', optimize=True)
            else:
                work_img.save(buf, format=img.format or 'WEBP', quality=q)
                
            data = buf.getvalue()
            size = len(data)
            
            if size <= TARGET_MAX_KB * 1024:
                best_data = data
                best_size = size
                break
            else:
                if size < best_size:
                    best_data = data
                    best_size = size

        # If still above target, resize down slightly more
        if best_size > TARGET_MAX_KB * 1024:
            for extra_scale in [0.85, 0.75, 0.65]:
                cur_w = int(work_img.size[0] * extra_scale)
                cur_h = int(work_img.size[1] * extra_scale)
                downscaled = work_img.resize((cur_w, cur_h), Image.Resampling.LANCZOS)
                for q in [75, 70, 65, 60]:
                    buf = io.BytesIO()
                    downscaled.save(buf, format='WEBP', quality=q, method=6)
                    data = buf.getvalue()
                    if len(data) <= TARGET_MAX_KB * 1024:
                        best_data = data
                        best_size = len(data)
                        break
                if best_size <= TARGET_MAX_KB * 1024:
                    break

        if best_data and best_size < orig_size:
            with open(path, 'wb') as f:
                f.write(best_data)
            return {
                'path': str(path),
                'orig_kb': orig_kb,
                'new_kb': best_size / 1024.0,
                'saved_kb': (orig_size - best_size) / 1024.0,
                'savings_pct': ((orig_size - best_size) / orig_size) * 100.0
            }
    return None

def main():
    img_exts = {'.png', '.jpg', '.jpeg', '.webp'}
    public_dir = Path('public')
    
    all_files = []
    for root, dirs, files in os.walk(public_dir):
        for f in files:
            p = Path(root) / f
            if p.suffix.lower() in img_exts:
                all_files.append(p)
                
    print(f"Total image files found in public/: {len(all_files)}")
    
    compressed_results = []
    for p in all_files:
        res = compress_image(p)
        if res:
            compressed_results.append(res)
            print(f"Compressed {p.name}: {res['orig_kb']:.1f} KB -> {res['new_kb']:.1f} KB (-{res['savings_pct']:.1f}%)")
            
    print(f"\nSuccessfully compressed {len(compressed_results)} images.")
    total_saved = sum(r['saved_kb'] for r in compressed_results)
    print(f"Total bandwidth saved: {total_saved:.1f} KB ({total_saved/1024.0:.2f} MB)")
    
    # Final verification
    print("\n--- FINAL VERIFICATION: CHECKING FOR ANY IMAGES > 150 KB ---")
    violators = []
    for p in all_files:
        size_kb = p.stat().st_size / 1024.0
        if size_kb > 150.0:
            violators.append((str(p), size_kb))
            
    if not violators:
        print("ALL IMAGES ARE STRICTLY <= 150 KB! Perfect compliance achieved.")
    else:
        print(f"WARNING: {len(violators)} images still exceed 150 KB:")
        for path, sz in violators:
            print(f"  {path}: {sz:.1f} KB")

if __name__ == '__main__':
    main()
