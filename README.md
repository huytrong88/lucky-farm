# Lucky Farm v4.4 – Map Game M2

Bộ project triển khai trực tiếp lên Vercel từ GitHub: index.html, scene-preview.html, farm-scene.png, api/.

## Tính năng
- Bản đồ M1 làm trang chơi chính; vuốt/chụm để điều hướng.
- Chạm khu vườn, chuồng gà, chuồng bò hoặc hồ để mở gameplay Vườn; chạm nhà kho để mở Cửa hàng.
- Giữ lại 25 ô, vật nuôi, nhiệm vụ, tài khoản Pi, API Redis và thanh toán Pi Sandbox của v4.1.
- Không tự động cộng xu và không thay đổi dữ liệu trên Redis khi tải project.

## Giới hạn
Đây là bản đồ tương tác 2.5D trên nền ảnh; các đối tượng trong ảnh chưa phải mô hình 3D độc lập. Chạm khu vực sẽ mở giao diện gameplay hiện hữu. Các vật phẩm trong ảnh chưa đặt/xóa được riêng. Pi Payment vẫn là thử nghiệm, không sử dụng Mainnet.

## Cài đặt
Giải nén, tải các file ở thư mục gốc ZIP lên root repository GitHub; giữ nguyên validation-key.txt; Vercel deploy tự động. Trước khi cập nhật hãy sao lưu repository và dữ liệu game.
