/*require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(port,
    () => {
        console.log(`Example app listening at http://localhost:${port}`);

    });**/
    const express = require('express');
    const app = express();
    const port = 4000; // เปลี่ยนเป็นพอร์ตที่ไม่ถูกใช้งาน
    
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
    