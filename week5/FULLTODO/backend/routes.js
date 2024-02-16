const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const CORS = require("cors");
const app = express();
app.use(express.json());
app.use(CORS({
    origin: "http://localhost:5173"
}));

app.post("/addtodo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return; // early return
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });
    res.json({
        msg: "Todo Created"
    });

});

app.get("/alltodos", async (req, res) => {
    const alltodos = await todo.find({});
    res.json({
        alltodos
    })
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.headers;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        });
        return;
    }

    const todoId = req.headers.id;

    try {
        const updatedTodo = await todo.findOneAndUpdate(
            { _id: todoId },
            { completed: true },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.json({ msg: "Todo marked as completed", updatedTodo });
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
});


app.listen(3000, () => {
    console.log("http://localhost:3000");
})