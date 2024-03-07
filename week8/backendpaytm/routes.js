const express = require("express");
const cors = require("cors");
const { PreZodSchema } = require("./zod");
const { User } = require("./db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
// const authMiddleware = require("./middlewares/authMiddleware");

const app = express();

app.use(express.json());
app.use(cors());
app.post("/signup", async (req, res) => {
    try {
        const { username, firstname, lastname, password } = req.body;
        const parsed = PreZodSchema.safeParse({ username, firstname, lastname, password });

        if (!parsed.success) {
            res.json("Invalid Credentials - ZOD");
            return;
        } else {
            const findUser1 = await User.findOne({
                username: username
            });

            if (findUser1) {
                res.json({
                    msg: "User already exists"
                });
            } else {
                const newUser = await User.create({
                    username,
                    firstname,
                    lastname,
                    password
                });

                const newUserid = newUser._id;
                const token = jwt.sign({ newUserid }, JWT_SECRET);

                res.status(200).json({
                    msg: "New User Created Successfully !!",
                    msg2: newUser,
                    msg3: "Token created Successfully",
                    msg4: token
                });
            }
        }
    } catch (error) {
        console.log("Server Error - Error Caught:", error);
        res.status(500).json({ error: "Server Error" });
    }
});


// app.post("/signin", authMiddleware, async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         const FindUser = await User.findOne({
//             username: username,
//             password: password
//         });

//         if (!FindUser) {
//             res.json({
//                 msg: "User Not Found!!"
//             });
//         }
//     } catch (error) {
//         console.log("Server Error - Error Caught:", error);
//         res.status(500).json({ error: "Server Error" });
//     }
// });

// app.put("/update", async (req, res) => {
//     try {
//         const id = req.headers.id;
//         const { firstname, lastname, password } = req.body;

//         const updateUser = await User.findOneAndUpdate(
//             { _id: id },
//             {
//                 firstname: firstname,
//                 lastname: lastname,
//                 password: password
//             },
//             { new: true } // to return the updated document
//         );

//         if (!updateUser) {
//             res.json({
//                 msg: "User not found for update"
//             });
//         } else {
//             res.json({
//                 msg: "Updated Successfully",
//                 msg2: updateUser
//             });
//         }
//     } catch (error) {
//         console.log("Server Error - Error Caught:", error);
//         res.status(500).json({ error: "Server Error" });
//     }
// });

app.listen(3000, () => {
    console.log("http://localhost:3000");
})

module.exports = app;
