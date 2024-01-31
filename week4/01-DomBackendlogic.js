const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.get("/getsum", (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const sum = num1 + num2;
    res.json({ result: sum });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
