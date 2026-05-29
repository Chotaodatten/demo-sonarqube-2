const express = require('express');
const crypto = require('crypto');
const { exec } = require('child_process');

const app = express();

const password = "123456"; // hardcoded credential
const apiKey = "SECRET-KEY-999";

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
console.log("API KEY:", apiKey);

// weak crypto
const hash = crypto
    .createHash('md5')
    .update(userInput)
    .digest('hex');

console.log(hash);

// command injection
exec("ping " + userInput);

// unused variable
let temp = 12345;

// empty catch block
try {

} catch(e) {

}

// null bug
let x = null;

try {
    x.trim();
} catch(e) {

}

res.send("Hello " + userInput);
```

});

app.listen(3000, () => {
console.log("Vulnerable App running on port 3000");
});
