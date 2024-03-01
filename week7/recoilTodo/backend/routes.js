const express = require("express");
const {  TODO } = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());


const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

app.post("/newtodo", async (req, res) => {
    const { title, description } = req.body;
    try {
        const newTodo = await TODO.create({
            title,
            description,
            isDone:false
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



app.put("/done", async (req, res) => {
    const id = req.body.id;

    try {
        const updatedTodo = await TODO.findOneAndUpdate(
            { _id: id },
            { isDone: true },
            { new: true } // returning updated todo
        );

        if (updatedTodo) {
            res.json({ msg: "Todo marked as done", todo: updatedTodo });
        } else {
            res.status(404).json({ msg: "Todo not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server Error" });
    }
});
app.delete("/delete", async (req, res) => {
    const id = req.body.id;

    try {
        const deletedTodo = await TODO.findOneAndDelete({ _id: id });

        if (deletedTodo) {
            res.json({ msg: "Todo deleted successfully", todo: deletedTodo });
        } else {
            res.status(404).json({ msg: "Todo not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server Error" });
    }
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});

module.exports = app;
