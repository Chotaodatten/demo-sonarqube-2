const express = require('express');
const app = express();

// 1. BUG: Biến chưa định nghĩa (undefined) nhưng vẫn gọi thuộc tính -> Gây crash app lập tức
let sessionData;
console.log(sessionData.user.id); 

// 2. CODE SMELL: Khai báo hàng loạt biến bằng 'var' thay vì 'let/const' (Lỗi lách scope)
var globalCount = 0;
var debugMode = true;

// 3. CODE SMELL: Biến khai báo xong vứt đó, không bao giờ sử dụng
const unusedSecretToken = "ABCXYZ123";
let temporaryCounter = 100;

// 4. CODE SMELL: Khối code trùng lặp (Duplicated Block) - Đoạn 1
function xử_lý_log_1() {
    console.log("Hệ thống bắt đầu khởi chạy...");
    console.log("Kiểm tra kết nối tới cơ sở dữ liệu...");
    console.log("Kết nối thành công!");
}
// Đoạn 2 lặp lại y hệt sẽ đẩy tỷ lệ Duplications lên cao
function xử_lý_log_2() {
    console.log("Hệ thống bắt đầu khởi chạy...");
    console.log("Kiểm tra kết nối tới cơ sở dữ liệu...");
    console.log("Kết nối thành công!");
}

app.get('/', (req, res) => {
    let userInput = req.query.name;

    // 5. CODE SMELL: Sử dụng toán tử so sánh lỏng lẻo '==' thay vì '==='
    if(userInput == "admin"){
        console.log("Admin logged in");
    }

    // 6. CODE SMELL: Cố tình lặp lại cấu trúc rẽ nhánh (Empty hoặc trùng logic)
    if(userInput == "admin"){
        console.log("Admin logged in");
    }

    // 7. BUG: Câu lệnh điều kiện có biểu thức luôn luôn Đúng (Dead Code/Useless condition)
    let mangKhongRong = [1, 2, 3];
    if (mangKhongRong.length > 0) { // Luôn đúng
        // 8. CODE SMELL: Khối lệnh rẽ nhánh rỗng, không xử lý gì bên trong
    }

    // 9. BUG: Thực hiện phép toán vô nghĩa trên kiểu dữ liệu (Ví dụ: chia cho chuỗi)
    let kếtQuảVôLý = userInput / 0;

    // 10. CODE SMELL: Đặt tên hàm/biến sai quy chuẩn đặt tên của Javascript (Không dùng camelCase)
    let Bien_Sai_Quy_Chuan_Format = "Lỗi đặt tên";

    res.send("Hello World");
});

// 11. CODE SMELL: Hàm callback nhận tham số nhưng không bao giờ xài (req, res)
app.get('/status', (req, res) => {
    // Không dùng req và res mà trả về text tĩnh
    console.log("Status OK");
});

app.listen(3000);