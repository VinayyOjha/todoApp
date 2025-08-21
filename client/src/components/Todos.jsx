/**
 * Here todos is an array, that looks something like this-
 * todos = [
    * {
    *  title: "ladhf",
    *  description: "wrtinwr"
    * }
 * ]
 */

export function Todos(todos){
    return (
        <div className="">
            {todos.map(function(todo){
                return (
                    <div className="">
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed == true ? "Completed" : "Mark as done"} </button>
                    </div>
                )
            })}
        </div>
    )
}