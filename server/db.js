/* The structure of the Database
     ->  Todo {
        title: string, 
        description: string,
        completed: boolean
    }
*/
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ojhavinay7602:41ogcPTNYrQHU9Ri@cluster0.gz0bnjr.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = { todo }