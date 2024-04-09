import express from "express";
import {VALUE} from "@repo/common/config";

console.log(VALUE);
const app = express();

app.get("/" , (req,res) => {
    res.json({ 
        msg : "hello world"
    })
})

app.listen(3000);