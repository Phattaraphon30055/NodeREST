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
const port = 5000; // หรือพอร์ตที่คุณต้องการ

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
