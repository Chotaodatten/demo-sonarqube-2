const express = require('express');
const app = express();

const password = "123456"; // hardcoded credential
const token = "my-secret-token";

app.get('/', (req, res) => {

```
let userInput = req.query.name;

// duplicated code
if(userInput == "admin"){
    console.log("Admin login");
}

if(userInput == "admin"){
    console.log("Admin login");
}

// insecure eval
eval(userInput);

// weak equality
if(userInput == null){
    console.log("Null input");
}

// sensitive log
console.log("TOKEN:", token);

res.send("Hello " + userInput);
```

});

app.listen(3000, () => {
console.log("Server running on port 3000");
});
