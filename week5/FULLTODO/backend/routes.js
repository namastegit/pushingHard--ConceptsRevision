const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
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
 await todo.create({
  title:createPayload.title,
  description:createPayload.description,
  completed: false
 });
 res.json({
    msg : "Todo Created"
 });

});

app.get("/alltodos", async (req, res) => {
   const alltodos = await todo.find({});
    res.json({
       alltodos
    })
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
await todo.update({
    //condition
    _id:req.body.id // _id ->  in ongoDB data base each one is uniquely identified by _id:"OII783626o2eywjidh6"
},{completed:true});
res.json({
    msg : " marked as completed "
});
});
