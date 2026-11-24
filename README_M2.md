# Lucky Farm M2 — 3D Asset Studio (WIP)

**Không tải lên GitHub sản xuất.** Game v4.1 đang chạy không thay đổi.

## Đã làm
- Thêm `asset-studio.html`: công cụ kiểm tra GLB/GLTF trong trình duyệt, hiển thị mesh, tam giác, kích thước, danh sách animation; có thể phát hoạt ảnh.
- Dùng `assets/manifest.json` làm danh sách 12 tài sản cần chuẩn bị.
- Giữ nguyên `index.html`, API, dữ liệu và game cũ.

## Cách chạy thử trên máy tính (không cần GitHub)
`python3 -m http.server 8080` rồi mở `http://localhost:8080/asset-studio.html` từ thư mục project. Cần Internet để tải Three.js từ esm.sh.

## Giới hạn
- Chưa tích hợp mô hình GLB thương mại/chất lượng cao nào. Môi trường dựng hiện tại không truy cập được máy chủ tải asset.
- File GLTF với texture bên ngoài có thể không hoạt động khi chọn từ máy; nên dùng GLB đóng gói texture.
- Đây là công cụ duyệt asset, chưa phải game 3D đạt chuẩn.

## Nguồn tài sản
- Quaternius Ultimate Animated Animals: https://quaternius.com/packs/ultimateanimatedanimals.html (CC0 theo trang nguồn)
- Kenney Nature Kit: https://kenney.nl/assets/nature-kit (CC0)
- Quaternius GLB dataset: https://huggingface.co/datasets/codepawl/quaternius-glb (kiểm tra giấy phép từng pack)

## Nghiệm thu tiếp theo
Tích hợp GLB thực, thống nhất art direction, làm hoạt ảnh nông dân, đối chiếu ảnh mẫu và đo FPS trên Android/Pi Browser.
