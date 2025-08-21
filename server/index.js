const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

// To create a todo
app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!paresedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
        return;
    }
})

// Get all the todos
app.get("/todos", function(req, res){
    
})

// Mark the todo as completed
app.put("/completed", function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!paresedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
        return;
    }
})