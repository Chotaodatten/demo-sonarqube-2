const express = require('express');
const app = express();

const password = "123456"; // hardcoded password

app.get('/', (req, res) => {
    let userInput = req.query.name;

    // duplicated code block
    if(userInput == "admin"){
        console.log("Admin login");
    }

    if(userInput == "admin"){
        console.log("Admin login");
    }

    res.send("Hello " + userInput);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});