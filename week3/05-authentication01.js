// const express = require("express");
// const zod = require("zod");

// const app = express();
// app.use(express.json());

// const mySchema1 = zod.object({
//     username : zod.string(),
//     password : zod.string()
// });

// const mySchema2 = zod.string();

// app.post("/signin", (req, res,) => {
//     const {username, password} = req.body;
//     const response = mySchema1.safeParse({
//         username,
//         password,
//     });
//     res.send(response);
// });

// app.get("/users", (req, res) =>{
//     const auth_header = req.headers.auth_header;

//     const response2 = mySchema2.safeParse(auth_header);

//     res.send(response2);
// });

// app.listen(3002, () => {
//     console.log("http://localhost:3002");
// });




// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json());

// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   return ALL_USERS.find((user) => user.username === username && user.password === password);
// }


// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
// //   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username
// //   } catch (err) {
//     // return res.status(403).json({
//     //   msg: "Invalid token",
//     // });
// //   }
// });

// app.listen(3000);



// >>>>>>REWRITING BY SELF<<<<<<<<<<<<<<<<<<

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassward = "123345";

const app = express();
app.use(express.json());

const ALL_USERS = [{
  username: "akshaykailey1507@gmail.com",
  passward: "123"
}, {
  username: "akshay@gmail.com",
  passward: "12"
},
{
  username: "akshaykailey@gmail.com",
  passward: "123321"
}];

function getData(username, passward) {
  return ALL_USERS.find(function (item) {
    return item.username === username && item.passward === passward
  });
};


app.post("/signin", (req, res) => {
  const username = req.body.username;
  const passward = req.body.passward;

  if (!getData(username, passward)) {
    res.status(403).json({
      msg: " USER DOESN'T EXIST"
    });

  };

  var token = jwt.sign({ username: username }, jwtPassward);
  return res.json({
    token
  })

});

app.get("/users", (req, res) => {
  const token = req.headers.authorizatio;

  const validation = jwt.verify(token, jwtPassward);
  const decoded = validation.username;

  if (!validation) {
    res.status(403).json({
      msg: "ACCESS NOT GRANTED - WRONG TOKEN"
    });
  };

  res.status(200).send(decoded);

});

app.use((err, req, res, next) => {
  res.status(404).json({
    msg: "NOT FOUND ANYTHING"
  });
});

app.listen(3001, () => {
  console.log("http://localhost:3001");
});