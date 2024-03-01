const express = require("express");
const jwt = require("jsonwebtoken");
const { USER, TODO } = require("./db");
const { JWT_SECRET } = require("./config");
const SigninMiddleware = require("./middlewares");
const usernamezodSchema = require("./types");
const cors = require("cors");

const app = express();
app.use(express.json());


const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

// app.post("/usersignup", async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const existingUser = await USER.findOne({ username });
//         if (existingUser) {
//             return res.status(503).json({ msg: "User already exists" });
//         }
//         const newUser = await USER.create({ username, password });
//         res.status(200).json({ msg: newUser });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ msg: "Server Error" });
//     }
// });

// app.post("/signin", async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         // Validate username and password using Zod schema
//         const zodValidation = usernamezodSchema.safeParse({ username, password });
//         if (!zodValidation.success) {
//             return res.status(400).json({ msg: "Invalid username or password format" });
//         }

//         // Check if the user exists in the database
//         const existingUser = await USER.findOne({ username, password });
//         if (!existingUser) {
//             return res.status(401).json({ msg: "Invalid credentials" });
//         }

//         // Create and send JWT token upon successful signin
//         const token = jwt.sign({ username }, JWT_SECRET);
//         res.status(200).json({ token });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ msg: "Server Error" });
//     }
// });

app.post("/newtodo", async (req, res) => {
    const { title, description } = req.body;
    try {
        const newTodo = await TODO.create({
            title,
            description,
        });
        res.json({ msg: newTodo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server Error" });
    }
});

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await TODO.find({});
        res.json({ todos: allTodos });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server Error" });
    }
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});

module.exports = app;
