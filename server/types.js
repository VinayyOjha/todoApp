//  ->  we require Input validators to make sure the data we receive are of right types
// i would except two/three things with the following types:

    // todo:{
    //     title: String,
    //     description: String,
    //     completed: boolean
    // }

//  ->  to mark a specific todo as completed we require their id-
    //  id: string

const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo: createTodo, 
    updateTodo: updateTodo
}