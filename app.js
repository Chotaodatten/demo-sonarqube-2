const express = require('express');
const app = express();

// 1. Sửa BUG & CODE SMELL: Khởi tạo giá trị mặc định bằng 'const' để tránh lỗi gọi thuộc tính của undefined
const sessionData = {
    user: {
        id: "default_user"
    }
};
console.log(sessionData.user.id);

// 2. Sửa CODE SMELL: Thay thế toàn bộ từ khóa 'var' bằng 'let' và 'const' để kiểm soát phạm vi biến sạch sẽ
let globalCount = 0;
const isDebugMode = true;

// 3. Sửa CODE SMELL: Loại bỏ hoàn toàn các biến rác khai báo xong vứt đó để giải phóng tài nguyên bộ nhớ
if (isDebugMode) {
    globalCount += 1;
}

// 4. Sửa CODE SMELL: Gộp hai hàm bị trùng lặp mã nguồn thành một hàm duy nhất có tính tái sử dụng cao
function xửLýLogHệThống() {
    console.log("Hệ thống bắt đầu khởi chạy...");
    console.log("Kiểm tra kết nối tới cơ sở dữ liệu...");
    console.log("Kết nối thành công!");
}

// Gọi hàm xử lý tập trung
xửLýLogHệThống();

app.get('/', (req, res) => {
    // Sử dụng fallback chuỗi rỗng để đề phòng trường hợp req.query.name bị rỗng (undefined)
    const userInput = req.query.name || "";

    // 5 & 6. Sửa CODE SMELL: Thay đổi toán tử '==' thành '===' và xóa bỏ hoàn toàn khối rẽ nhánh bị lặp lại logic
    if (userInput === "admin") {
        console.log("Admin logged in");
    }

    // 7 & 8. Sửa BUG & CODE SMELL: Loại bỏ câu lệnh điều kiện luôn đúng và xóa khối lệnh rẽ nhánh rỗng
    const danhSáchDữLiệu = [1, 2, 3];
    console.log(`Số lượng phần tử trong danh sách: ${danhSáchDữLiệu.length}`);

    // 9. Sửa BUG: Loại bỏ phép toán chia cho chuỗi vô nghĩa, thay bằng việc kiểm tra tính hợp lệ của dữ liệu số
    const thamSốSố Lượng = parseInt(userInput, 10);
    if (!isNaN(thamSốSố Lượng) && thamSốSố Lượng !== 0) {
        const kếtQuảTínhToán = 100 / thamSốSố Lượng;
        console.log(`Kết quả xử lý: ${kếtQuảTínhToán}`);
    }

    // 10. Sửa CODE SMELL: Thay đổi cách đặt tên biến tuân thủ nghiêm ngặt quy chuẩn camelCase của javascript
    const biếnĐãSửaĐúngQuyChuẩnFormat = "Mã nguồn sạch";
    console.log(biếnĐãSửaĐúngQuyChuẩnFormat);

    res.send("Hello World");
});

// 11. Sửa CODE SMELL: Hàm callback bắt buộc phải sử dụng tham số 'res' để trả dữ liệu về cho phía client
app.get('/status', (req, res) => {
    console.log("Yêu cầu kiểm tra trạng thái hệ thống");
    res.status(200).json({ status: "OK" });
});

// Cấu hình cổng dịch vụ cho máy chủ web chạy ngầm
app.listen(3000, () => {
    console.log("Máy chủ web server đang vận hành ổn định tại cổng 3000");
});