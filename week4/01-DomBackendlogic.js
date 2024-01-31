const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware npm install cors

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes -- error occurs when a web page hosted on one domain tries to make a request to a different domain using JavaScript, and the server on the different domain doesn't include the necessary CORS headers to allow the request.

app.get("/getsum", (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const sum = num1 + num2;
    res.json({ result: sum });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
