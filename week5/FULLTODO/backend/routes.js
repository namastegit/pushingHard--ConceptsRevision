const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
app.use(express.json());

app.post("/addtodo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return; // early return
    }

});

app.get("/alltodos", async (req, res) => {
});

app.put("/completed", async (req, res) => {
const updatePayload = req.body;
const parsedPayload = updateTodo.safeParse(updatePayload);
if(!parsedPayload.success) {
    res.status(411).json({
        msg : " You sent wrong inputs"  
    })
    return;
}
});
