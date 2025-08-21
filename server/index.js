const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());
app.use(cors());

// To create a todo
app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created."
    })
})

// Get all the todos
app.get("/todos", async function(req, res){
    const todos = await todo.find({}); // todos.find() hits the data and we have to wait for the data, and therefore the    async-await syntax

    res.json({ todos })
})

// Mark the todo as completed
app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!paresedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
        return;
    }

    // Update function takes TWO arguments - ID and mark 'completed ' as done.
    // "I want to update the completed attribute"
    // The FE will ask the BE pls update the todo with the  ->  'id'.
    await todo.update({
        _id: req.body.id // every entry into the table are uniquly identified by '_id'
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as done!"
    })
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000.")
})