import os
from PIL import Image, ImageOps

def center_crop_to_ratio(img: Image.Image, target_ratio=(1, 1)):
    orig_width, orig_height = img.size
    target_w, target_h = target_ratio

    desired_ratio = target_w / target_h
    current_ratio = orig_width / orig_height

    if current_ratio > desired_ratio:
        # 이미지가 너무 넓음 → 좌우 잘라냄
        new_width = int(orig_height * desired_ratio)
        new_height = orig_height
        left = (orig_width - new_width) // 2
        top = 0
    else:
        # 이미지가 너무 높음 → 위아래 잘라냄
        new_width = orig_width
        new_height = int(orig_width / desired_ratio)
        left = 0
        top = (orig_height - new_height) // 2

    right = left + new_width
    bottom = top + new_height

    return img.crop((left, top, right, bottom))

def process_images_in_folder(folder_path, target_ratio=(1, 1)):
    supported_ext = ['.jpg', '.jpeg', '.png', '.bmp', '.tif', '.tiff']
    for filename in os.listdir(folder_path):
        name, ext = os.path.splitext(filename)
        ext = ext.lower()

        if ext not in supported_ext:
            continue

        input_path = os.path.join(folder_path, filename)
        with Image.open(input_path) as img:
            img = ImageOps.exif_transpose(img)  # <-- 이 줄 추가!

            # 기존 DPI 정보 유지 (없으면 72로)
            dpi = img.info.get('dpi', (72, 72))

            # # 백업: 원본을 jpg로 저장
            # original_jpg_path = os.path.join(folder_path, f"original_{name}.jpg")
            # img.convert("RGB").save(original_jpg_path, format='JPEG', dpi=dpi)

            # 중심 크롭
            cropped = center_crop_to_ratio(img, target_ratio=target_ratio)

            # 덮어쓰기: 수정된 이미지를 .jpg로 저장
            output_path = os.path.join(f"{name}.jpg")
            cropped.convert("RGB").save(output_path, format='JPEG', dpi=dpi)
            print(f"Saved cropped image to {output_path}")

    print("✅ 처리 완료!")

# 사용 예: 현재 폴더에 있는 이미지들을 1:1 비율로 변환
process_images_in_folder("./original_pics", target_ratio=(240, 300))

