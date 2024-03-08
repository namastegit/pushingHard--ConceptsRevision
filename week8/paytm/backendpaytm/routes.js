const express = require("express");
const cors = require("cors");
const { PreZodSchema } = require("./zod");
const { User, Account } = require("./db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
const authMiddleware = require("./middlewares/authMiddleware");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.post("/signup", async (req, res) => {
    try {
        const { username, firstname, lastname, password } = req.body;
        const parsed = PreZodSchema.safeParse({ username, firstname, lastname, password });
        if (!parsed.success) {
            res.status(400).json("Invalid Credentials - ZOD");
            return;
        }

        const findUser1 = await User.findOne({
            username: username
        });

        if (findUser1) {
            res.status(400).json({
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
            const account1 = await Account.create({
                userId: newUserid,
                balance: 1 + Math.random() * 10000,
                token: token,
            });



            res.status(200).json({
                msg: "New User Created Successfully !!",
                msg2: newUser,
                msg3: "Token created Successfully",
                msg4: token,
                msg5: account1
            });
        }


    } catch (error) {
        console.log("Server Error - Error Caught:", error);
        res.status(500).json({ error: "Server Error" });
    }
});

app.post("/signin", authMiddleware, async (req, res) => {
    try {
        const { username, password } = req.body;

        const findUser = await User.findOne({
            username: username,
            password: password
        });

        if (!findUser) {
            return res.status(400).json({
                msg: "User Not Found!!"
            });
        }

        return res.json({
            msg4: "User Logged in Successfully"
        });
    } catch (error) {
        console.error("Server Error - Error Caught:", error);
        return res.status(500).json({ error: "Server Error" });
    }
});


app.put("/update", async (req, res) => {
    try {
        const id = req.headers.id;
        const { firstname, lastname, password } = req.body;

        const updateUser = await User.findOneAndUpdate(
            { _id: id },
            {
                firstname: firstname,
                lastname: lastname,
                password: password
            },
            { new: true } // to return the updated document
        );

        if (!updateUser) {
            res.json({
                msg: "User not found for update"
            });
        } else {
            res.json({
                msg: "Updated Successfully",
                msg2: updateUser
            });
        }
    } catch (error) {
        console.log("Server Error - Error Caught:", error);
        res.status(500).json({ error: "Server Error" });
    }
});
app.get("/filtre", async (req, res) => {
    try {
        const filtre = req.query.filtre || "";

        const userfiltering = await User.find({
            $or: [
                {
                    firstname: {
                        "$regex": filtre,
                        "$options": "i" // Case-insensitive matching
                    }
                },
                {
                    lastname: {
                        "$regex": filtre,
                        "$options": "i"
                    }
                }
            ]
        });

        res.json({
            users: userfiltering.map((filteredUser) => ({
                username: filteredUser.username,
                firstname: filteredUser.firstname,
                lastname: filteredUser.lastname,
                password: filteredUser.password
            }))
        });
    } catch (error) {
        console.error("Server Error - Error Caught:", error);
        res.status(500).json({ error: "Server Error" });
    }
});


app.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});
app.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { from, amount, to } = req.body;

    const account1 = await Account.findOne({
        userId: from
    }).session(session);

    if (!account1 || amount > account1.balance) {
        await session.abortTransaction(); 
        res.json({
            msg: "Insufficient Balance/ Account Not found"
        });
        return;
    } else {
        const account2 = await Account.findOne({
            userId: to
        }).session(session);
        if (!account2) {
            await session.abortTransaction(); 
            res.json({
                msg: "Receiving Account Doesn't Exist !!"
            });
        } else {
            await Account.updateOne({
                userId: from
            }, {
                "$inc": {
                    balance: -amount
                }
            }).session(session);

            await Account.updateOne({
                userId: to
            }, {
                "$inc": {
                    balance: amount
                }
            }).session(session);
            await session.commitTransaction(); 
            res.json({
                message: "Transfer successful",
            });
        }
    }
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
})

module.exports = app;
