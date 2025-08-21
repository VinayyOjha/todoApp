/* The structure of the Database
     ->  Todo {
        title: string, 
        description: string,
        completed: boolean
    }
*/

const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

model.exports = {todo}