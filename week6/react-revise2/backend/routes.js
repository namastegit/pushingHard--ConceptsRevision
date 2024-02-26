const express = require("express");
const { checkCredentials } = require("./zodSchema");
const { JWT_SECRET } = require("./config");
const { User1, Todo1 } = require("./db");
const jwt = require("jsonwebtoken");
// const signinMiddleware = require("./middlewares");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const Final1 = checkCredentials.safeParse({ username, password });

    try {
        if (!Final1.success) {
            res.status(503).json({
                msg: " Enter valid Credentials!! "
            });
        }
        const alredyExists = await User1.findOne(
            {
                username: username,
                password: password,
            }
        );
        if (alredyExists) {
            res.json({
                msg: " User already exists!!"
            });
        }
        else {
            const newUser = await User1.create({
                username: username,
                password: password
            });
            res.status(200).json({

                msg: newUser

            });
        }


    } catch {
        (e) => {
            res.json({
                msg: e
            });
        };
        return
    }
});

app.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const preExistence = await User1.findOne({
            username: username,
            password: password
        });
        if (preExistence) {
            const token = jwt.sign({ username }, JWT_SECRET);
            res.json({

                msg: token

            });
        }
        res.json({
            msg: "Invalid credentials!! "
        });
    } catch {
        return (e) => {
            res.json({
                msg: e

            }
            );

        }
    }

});


app.post("/newtodo", async (req, res) => {
    const { title, description} = req.body;
    try {
const newTODO = await Todo1.create({
    title,
    description,
    isDone: false
})
res.json({
    msg : newTODO
});

    } catch {
        return (e) => {
            res.json({
                msg: e
            })
        }
    }
});
app.get("/alltodos", async(req, res) => {
    const alltodos = await Todo1.find();

    res.status(200).json({
        msg : alltodos
    });
});
app.get("/singletodo", async(req, res) => {
    const title = req.query.title;
    const singletodo = await Todo1.findOne({
        title : title
    });
    res.json({
msg :singletodo
    })
});
app.put("/done", async(req, res) => {
    const id = req.headers.id; // Extract the id from req.headers
    try {
        const completed = await Todo1.findOneAndUpdate(
            { _id: id }, // Use the extracted id here
            { isDone: true }, // Update isDone field instead of completed
            { new: true }
        );

        if (completed) { // Check if the todo was found and updated
            return res.status(200).json({
                msg : "Todo marked as done!!"
            });
        } else {
            return res.status(404).json({ // Change status to 404 if todo is not found
                msg : "Todo not found!!"
            });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ // Handle internal server error
            msg : "Internal server error"
        });
    }
});


app.listen(3000, () => {
    console.log("http://localhost:3000");
})
