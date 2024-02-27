const express = require("express");
const { checkInputs } = require("./zod");
const { USERSCHEMA } = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
    const { id, username, description, interest1, interest2, interest3, link1, link2 } = req.body;
    const parsedInput = await checkInputs.safeParse({
        id,
        username,
        description,
        interest1,
        interest2,
        interest3,
        link1,
        link2
    });

    if (!parsedInput.success) {
        res.json({
            msg: "Enter valid Inputs!!"
        });
    } else {
        const newUser = await USERSCHEMA.create({
            id,
            username,
            description,
            interest1,
            interest2,
            interest3,
            link1,
            link2
        });
        res.json({
            msg: newUser
        });
    }
});

app.get("/getall", async (req, res) => {
    const allusers = await USERSCHEMA.find({});
    res.json({
        users: allusers
    });
});

app.get("/getone", async (req, res) => {
    const id = req.query.id;
    const oneuser = await USERSCHEMA.findOne({
        id: id
    });
    res.json({
        users: oneuser
    });
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
