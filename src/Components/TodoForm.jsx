import {useContext, useState} from "react";
import {TodosContext} from "../context/TodosContext.js";

export default function TodoForm() {
    const [todoInput, setTodoInput] = useState("");
    const {todos, setTodos, idForTodo, setIdForTodo} = useContext(TodosContext);

    function handleInput(event) {
        setTodoInput(event.target.value)
    }

    function addTodo(event) {
        event.preventDefault();
        if (todoInput.trim().length === 0) {
            return alert("Please add a task!");
        }

        setTodos([...todos, {id: idForTodo, title: todoInput, isComplete: false, isEditing: false},])
        setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);
        setTodoInput("");
    }

    return (
        <form action="#" className="w-full" onSubmit={addTodo}>
            <input
                className="block w-full border border-gray-200 p-2.5 rounded my-2.5 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                type="text"
                value={todoInput}
                onChange={handleInput}
                placeholder="What do you need to do?"/>
        </form>
    );
}