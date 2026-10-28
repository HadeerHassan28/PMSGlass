#!/usr/bin/env python3
"""
PMS GLASS - Portfolio Image Watermarking / Landmark Script
===========================================================
Automatically applies the company logo and contact phone number
as a clean, professional watermark/landmark onto all service portfolio images.

Supports:
- Dynamic proportional scaling based on image resolution.
- Automatic EXIF orientation normalization (exif_transpose).
- Sleek translucent dark glass pill/card with gold accent border for maximum legibility on all surfaces.
- Safe output handling: saves to corresponding output directories (e.g. <folder>_watermarked)
  or cleanly overwrites originals with atomic replacement.
- Preserves ICC profiles and saves with high quality (95).
"""

import os
import sys
import argparse
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

# ==============================================================================
# DEFAULT CONFIGURATION
# ==============================================================================
DEFAULT_BASE_PATH = "/Volumes/Hadeer/Work_For_MS/Portifolio/public/images"
DEFAULT_LOGO_PATH = "/Volumes/Hadeer/Work_For_MS/Portifolio/public/images/logo.png"
DEFAULT_PHONE_TEXT = "01017905067"

# Service folder mappings: maps normalized/canonical service keys to disk folder names
SERVICE_FOLDER_ALIASES = {
    "facades": ["frontMall", "facades", "Facades", "front_mall"],
    "mirrors": ["mirror", "mirrors", "Mirrors"],
    "shower": ["shawar", "shower", "showers", "Shower", "Showers"],
    "handrails": ["handrill", "handrail", "handrails", "Handrails"],
    "pergolas": ["pergola", "pergolas", "Pergolas"],
    "decorative_mirrors": ["decorMirror", "decorative_mirrors", "decorative-mirrors", "Decorative_Mirrors", "decor_mirror"],
    "accessories": ["accessories", "Accessories"],
}

VALID_EXTENSIONS = (".jpg", ".jpeg", ".png", ".webp")


def get_preferred_font(size: int):
    """Loads a high-quality system TrueType font or falls back gracefully."""
    font_candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
        "arial.ttf",
        "Helvetica",
    ]
    for candidate in font_candidates:
        if os.path.exists(candidate):
            try:
                return ImageFont.truetype(candidate, size)
            except Exception:
                continue
    try:
        return ImageFont.load_default(size=size)
    except TypeError:
        return ImageFont.load_default()


def create_watermarked_image(
    image_path: str,
    logo_img: Image.Image,
    phone_text: str,
    use_badge: bool = True
) -> Image.Image:
    """
    Applies the logo and phone text onto the base image.
    Uses proportional sizing and EXIF orientation normalization.
    """
    with Image.open(image_path) as raw_img:
        # 1. Normalize orientation from camera EXIF
        base_img = ImageOps.exif_transpose(raw_img)
        icc_profile = base_img.info.get("icc_profile")
        base_img = base_img.convert("RGBA")

    img_w, img_h = base_img.size
    scale_ref = min(img_w, img_h)

    # 2. Compute dynamic sizes based on resolution
    # Logo width: ~11% of the shortest side, bounded between 110px and 300px
    target_logo_w = max(110, min(300, int(scale_ref * 0.11)))
    orig_logo_w, orig_logo_h = logo_img.size
    target_logo_h = int(orig_logo_h * (target_logo_w / orig_logo_w))

    resized_logo = logo_img.resize((target_logo_w, target_logo_h), Image.Resampling.LANCZOS)

    # Font size proportional to logo width
    font_size = max(16, int(target_logo_w * 0.14))
    font = get_preferred_font(font_size)

    # 3. Create overlay layer
    overlay = Image.new("RGBA", (img_w, img_h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Measure text dimensions
    bbox = draw.textbbox((0, 0), phone_text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]

    margin = max(24, int(scale_ref * 0.025))

    if use_badge:
        # Translucent dark glass badge with gold accent border
        pad_x = max(14, int(target_logo_w * 0.08))
        pad_y = max(12, int(target_logo_h * 0.07))
        inner_spacing = max(6, int(target_logo_h * 0.04))

        card_w = max(target_logo_w, text_w) + pad_x * 2
        card_h = target_logo_h + text_h + inner_spacing + pad_y * 2
        radius = max(10, int(card_w * 0.06))

        card_x = img_w - card_w - margin
        card_y = img_h - card_h - margin

        # Draw rounded badge backdrop: sleek tinted acrylic
        draw.rounded_rectangle(
            [card_x, card_y, card_x + card_w, card_y + card_h],
            radius=radius,
            fill=(14, 17, 22, 170),
            outline=(245, 184, 0, 110),  # Signature PMS gold #F5B800
            width=2
        )

        # Center logo inside badge
        logo_x = card_x + (card_w - target_logo_w) // 2
        logo_y = card_y + pad_y
        overlay.paste(resized_logo, (logo_x, logo_y), resized_logo)

        # Center phone text under logo
        text_x = card_x + (card_w - text_w) // 2
        text_y = logo_y + target_logo_h + inner_spacing
        draw.text(
            (text_x, text_y),
            phone_text,
            fill=(255, 255, 255, 245),
            font=font
        )
    else:
        # Direct watermark without badge, using dark stroke outline for legibility
        watermark_w = max(target_logo_w, text_w)
        watermark_h = target_logo_h + text_h + 8

        x_pos = img_w - watermark_w - margin
        y_pos = img_h - watermark_h - margin

        logo_x = x_pos + (watermark_w - target_logo_w) // 2
        logo_y = y_pos
        overlay.paste(resized_logo, (logo_x, logo_y), resized_logo)

        text_x = x_pos + (watermark_w - text_w) // 2
        text_y = logo_y + target_logo_h + 6
        draw.text(
            (text_x, text_y),
            phone_text,
            fill=(255, 255, 255, 245),
            stroke_width=2,
            stroke_fill=(0, 0, 0, 220),
            font=font
        )

    # Composite layers
    final_img = Image.alpha_composite(base_img, overlay).convert("RGB")
    if icc_profile:
        final_img.info["icc_profile"] = icc_profile

    return final_img


def save_image_safely(img: Image.Image, target_path: str, quality: int = 95):
    """Saves an image safely via atomic write to prevent corruption."""
    target = Path(target_path)
    target.parent.mkdir(parents=True, exist_ok=True)
    temp_path = target.with_suffix(f".tmp_{os.getpid()}_{target.suffix}")

    ext = target.suffix.lower()
    save_kwargs = {}
    if "icc_profile" in img.info:
        save_kwargs["icc_profile"] = img.info["icc_profile"]

    if ext in (".jpg", ".jpeg"):
        img.save(str(temp_path), "JPEG", quality=quality, optimize=True, **save_kwargs)
    elif ext == ".png":
        img.save(str(temp_path), "PNG", optimize=True, **save_kwargs)
    elif ext == ".webp":
        img.save(str(temp_path), "WEBP", quality=quality, **save_kwargs)
    else:
        img.save(str(temp_path), quality=quality, **save_kwargs)

    # Atomic rename replaces file cleanly
    os.replace(str(temp_path), str(target))


def resolve_service_directories(base_path: str) -> dict:
    """
    Locates the actual service directories on disk, whether they reside in
    <base_path>/services/<folder> or directly in <base_path>/<folder>.
    Returns a dict mapping canonical service name to actual path on disk.
    """
    search_roots = [
        os.path.join(base_path, "services"),
        base_path,
    ]

    resolved = {}
    for service_key, aliases in SERVICE_FOLDER_ALIASES.items():
        found_dir = None
        for root in search_roots:
            if not os.path.exists(root):
                continue
            for alias in aliases:
                candidate = os.path.join(root, alias)
                if os.path.isdir(candidate):
                    found_dir = candidate
                    break
            if found_dir:
                break
        if found_dir:
            resolved[service_key] = found_dir

    return resolved


def process_service_folder(
    folder_name: str,
    input_dir: str,
    output_dir: str,
    logo_img: Image.Image,
    phone_text: str,
    use_badge: bool = True
) -> tuple[int, int]:
    """Processes all images in a folder and saves watermarked versions."""
    files = sorted([
        f for f in os.listdir(input_dir)
        if not f.startswith(".") and f.lower().endswith(VALID_EXTENSIONS)
    ])

    if not files:
        print(f"  [!] لا توجد صور صالحة في: {input_dir}")
        return 0, 0

    os.makedirs(output_dir, exist_ok=True)
    success_count = 0
    fail_count = 0

    print(f"\n📂 قسم: {folder_name}")
    print(f"   المسار المصدري: {input_dir}")
    print(f"   مسار الحفظ:    {output_dir}")
    print(f"   عدد الصور:     {len(files)}")

    for idx, filename in enumerate(files, start=1):
        src_path = os.path.join(input_dir, filename)
        dst_path = os.path.join(output_dir, filename)

        try:
            watermarked = create_watermarked_image(src_path, logo_img, phone_text, use_badge=use_badge)
            save_image_safely(watermarked, dst_path, quality=95)
            success_count += 1
            print(f"   [{idx}/{len(files)}] تم بنجاح: {filename}")
        except Exception as e:
            fail_count += 1
            print(f"   [{idx}/{len(files)}] خطأ في {filename}: {e}", file=sys.stderr)

    return success_count, fail_count


def main():
    parser = argparse.ArgumentParser(description="Apply logo & landmark watermark to PMS GLASS service portfolio images.")
    parser.add_argument("--base-dir", default=DEFAULT_BASE_PATH, help="Base public images directory")
    parser.add_argument("--logo", default=DEFAULT_LOGO_PATH, help="Path to logo PNG")
    parser.add_argument("--phone", default=DEFAULT_PHONE_TEXT, help="Contact phone number text")
    parser.add_argument("--overwrite", action="store_true", help="Overwrite images in place instead of creating _watermarked folders")
    parser.add_argument("--no-badge", action="store_true", help="Omit translucent card badge and apply direct watermark with stroke")
    parser.add_argument("--folder", help="Process only a specific service folder name")
    args = parser.parse_args()

    print("==================================================")
    print("   PMS GLASS - سكربت العلامة المائية للصور")
    print("==================================================")

    if not os.path.exists(args.logo):
        print(f"خطأ: ملف اللوجو غير موجود في: {args.logo}", file=sys.stderr)
        sys.exit(1)

    logo = Image.open(args.logo).convert("RGBA")
    print(f"✔ تم تحميل اللوجو بنجاح: {args.logo} (الحجم: {logo.size})")
    print(f"✔ رقم الهاتف: {args.phone}")

    # Resolve directories
    service_dirs = resolve_service_directories(args.base_dir)
    if not service_dirs:
        print(f"خطأ: لم يتم العثور على أي مجلدات خدمات داخل: {args.base_dir}", file=sys.stderr)
        sys.exit(1)

    print(f"✔ تم العثور على {len(service_dirs)} أقسام للخدمات:")
    for k, v in service_dirs.items():
        print(f"   - {k} -> {v}")

    total_success = 0
    total_fails = 0

    for canonical_name, input_path in service_dirs.items():
        if args.folder and args.folder.lower() not in (canonical_name, os.path.basename(input_path).lower()):
            continue

        folder_basename = os.path.basename(input_path)
        if args.overwrite:
            output_path = input_path
        else:
            output_path = os.path.join(os.path.dirname(input_path), f"{folder_basename}_watermarked")

        succ, fail = process_service_folder(
            folder_name=folder_basename,
            input_dir=input_path,
            output_dir=output_path,
            logo_img=logo,
            phone_text=args.phone,
            use_badge=not args.no_badge
        )
        total_success += succ
        total_fails += fail

    print("\n==================================================")
    print(f"النتيجة النهائية:")
    print(f"  ✔ الصور الناجحة: {total_success}")
    if total_fails > 0:
        print(f"  ❌ الصور الفاشلة: {total_fails}")
    print("تم الانتهاء من جميع الأقسام بنجاح!")
    print("==================================================")


if __name__ == "__main__":
    main()
