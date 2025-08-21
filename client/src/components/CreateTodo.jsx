import { useState } from "react";

function CreateTodo(props){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="">
            <input type="text" placeholder="title" onChange={function(e) {
                setTitle(e.target.value);
            }} />
            <br />
            <input type="text" placeholder="description" onChange={function(e) {
                setDescription(e.target.value);
            }} /><br />
            <button className="" onClick={()=>{
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        desccription: description
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(async function(res){
                        const json = res.json();
                        alert("Todo Created")
                    })
            }} >Add a button</button>
        </div>
    )
}

export default CreateTodo;