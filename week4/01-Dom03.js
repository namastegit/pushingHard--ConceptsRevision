const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/interest/", (req, res) => {
    const principle = parseFloat(req.query.principle);
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);

    const simpleInterest = (principle * rate * time) / 100;

    res.json({
        result: simpleInterest
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
