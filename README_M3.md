# Lucky Farm M3 – GLB 3D scene

Đã tích hợp 30 mô hình GLB từ farm.zip vào assets/. Cảnh farm-3d.html dùng GLTFLoader tải mô hình thật, bố trí nhà kho, chuồng gà, bò, cây, cửa hàng, hàng rào, ao vịt, máy kéo và 25 ô ruộng. Có camera cố định, vuốt di chuyển, zoom, chọn vật thể, mô phỏng tăng trưởng, di chuyển nhẹ của động vật.

**Chưa đạt chuẩn ảnh mẫu:** bộ tài sản được tác giả mô tả low-poly, không có nông dân rigged hay hệ thống animation chuyên nghiệp. Các giai đoạn cây hiện mới mô phỏng scale, chưa tách mesh riêng. Chưa kiểm thử Pi Browser thực tế.

**Bảo toàn dữ liệu:** index.html và API giữ từ bản M2; farm-3d.html là trang riêng. Không cần thay game hiện tại.

**Giấy phép:** xem assets/LICENSE.txt. Không phân phối riêng bộ asset; chỉ dùng trong game theo điều khoản tác giả.

**Chạy thử local:** `python3 -m http.server 8000` và truy cập `/farm-3d.html` (cần Internet để tải Three.js từ esm.sh).
