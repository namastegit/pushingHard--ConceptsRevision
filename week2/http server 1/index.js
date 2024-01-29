// step 1 -- npm init -y run in terminal

// step 3 - npm install express

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });



const express = require("express");

function GetSum(a) {
  c = a + a;
  return c;
}

const app = express();


app.get("/", function(req, res){
  const a = req.query.a;

  const ans = GetSum(a);

  res.send("ans is == "+ans);
});

app.listen(3002);



const express = require("express");

function GetSum(a) {
  const c = a + a;
  return c;
}

const app1 = express();

app1.get("/", function(req, res) {
  const a = parseFloat(req.query.a);

  if (isNaN(a)) {
    res.status(400).send("Invalid input. 'a' must be a valid number.");
    return;
  }

  const ans = GetSum(a);

  // Convert ans to a string before sending it in the response
  res.send("ans is == " + ans.toString());
});

app1.listen(3000, () => {
  console.log("Server is listening at http://localhost:3000");
});
