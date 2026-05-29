const express = require('express');
const app = express(); // Gây lỗi Security Hotspot (Fingerprinting) vì không disable x-powered-by

app.get('/', (req, res) => {
    let userInput = req.query.name;

    // 1. CODE SMELL: Trùng lặp code (Duplicated code block)
    if(userInput == "admin"){
        console.log("Admin login");
    }
    if(userInput == "admin"){
        console.log("Admin login");
    }

    // 2. BUG: Gây crash server nếu user không truyền tham số 'name' (gây ra lỗi gọi hàm trên undefined)
    // Giả lập một Bug logic xử lý chuỗi:
    let upperName = userInput.toUpperCase(); 

    // 3. VULNERABILITY: Lỗi Reflected XSS do nối chuỗi trực tiếp dữ liệu chưa kiểm duyệt
    res.send("Hello " + userInput);
});

// 4. CODE SMELL: Khai báo biến mà không sử dụng (unused variable)
const unusedVariable = "Khang"; 

app.listen(3000, () => {
    console.log("Server running on port 3000");
});