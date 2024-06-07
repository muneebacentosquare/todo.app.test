import {useState} from "react";

export default function TodoForm(props) {
    const [todoInput, setTodoInput] = useState("");

    function handleInput(event) {
        setTodoInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (todoInput.trim().length === 0) {
            return alert("Please add a task!");
        }

        props.addTodo(todoInput);
        setTodoInput("");
    }

    return (
        <form action="#" className="w-full" onSubmit={handleSubmit}>
            <input
                className="block w-full border border-gray-200 p-2.5 rounded my-2.5 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                type="text"
                value={todoInput}
                onChange={handleInput}
                placeholder="What do you need to do?"/>
        </form>
    );
}