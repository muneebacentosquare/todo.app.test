import TodoForm from "./Components/TodoForm.jsx";
import {useState} from "react";
import './App.css'

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Finish React Series",
        },
        {
            id: 2,
            title: "Go Grocery",
        },
        {
            id: 3,
            title: "Take over the world",
        }
    ]);

    const [idForTodo, setIdForTodo] = useState(4);

    function addTodo(todo) {
        setTodos([...todos, {id: idForTodo, title: todo,},])
        setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);
    }

    return (
        <main>
            <div className="w-2/5 p-5 my-10 mx-auto justify-center rounded shadow">
                <h3 className="text-black text-2xl font-semibold mb-2">Todo App</h3>
                <TodoForm addTodo={addTodo}/>
                <ul className="mt-2">
                    {todos.map((todo) => (
                        <li className="flex justify-between items-center px-1 py-2">
                            <div className="flex items-center space-x-2.5">
                                <input type="checkbox" id="1" className="checked:bg-blue-500"/>
                                <label htmlFor="1" className="text-gray-700 text-base">{todo.title}</label>
                            </div>
                            <button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                     className="lucide lucide-x">
                                    <path d="M18 6 6 18"/>
                                    <path d="m6 6 12 12"/>
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>
                <hr className="mt-2"/>
                <div className="flex justify-between items-center my-4">
                    <button className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Check All
                    </button>
                    <p className="text-gray-700">3 tasks remaining</p>
                </div>
                <hr/>
                <div className="flex justify-between items-center my-4">
                    <div className="flex space-x-2 items-center">
                        <button className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base">
                            All
                        </button>
                        <button className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">
                            Active
                        </button>
                        <button className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">
                            Completed
                        </button>
                    </div>
                    <button className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Clear
                        Completed
                    </button>
                </div>
            </div>
        </main>
    )
}

export default App
