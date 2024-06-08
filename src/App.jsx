import TodoForm from "./Components/TodoForm.jsx";
import TodoList from "./Components/TodoList.jsx";
import NoTodo from "./Components/NoTodo.jsx";
import {useState} from "react";
import './App.css'

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Finish React Series",
            isComplete: false,
            isEditing: false,
        },
        {
            id: 2,
            title: "Go Grocery",
            isComplete: false,
            isEditing: false,
        },
        {
            id: 3,
            title: "Take over the world",
            isComplete: false,
            isEditing: false,
        }
    ]);

    const [idForTodo, setIdForTodo] = useState(4);

    function addTodo(todo) {
        setTodos([...todos, {id: idForTodo, title: todo, isComplete: false, isEditing: false},])
        setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);
    }

    function completeTodo(id) {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function markAsEditing(id) {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isEditing = !todo.isEditing;
                console.log('editing');
            }
            return todo;
        });

        setTodos(updatedTodos);
    }

    function updateTodo(event, id) {
        const updateTodos = todos.map((todo) => {
            if (todo.id === id) {
                if (event.target.value.trim().length === 0) {
                    todo.isEditing = false;
                    return todo;
                }
                todo.title = event.target.value;
                todo.isEditing = false;
            }
            return todo;
        });
        setTodos(updateTodos);
    }

    function cancelEdit(event, id) {
        const updateTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isEditing = false;
            }
            return todo;
        });
        setTodos(updateTodos);
    }

    function deleteTodo(id) {
        setTodos([...todos].filter((todo) => todo.id !== id));
    }

    function remainingTodos() {
        return todos.filter((todo) => !todo.isComplete).length;
    }

    return (
        <main>
            <div className="w-2/5 p-5 my-10 mx-auto justify-center rounded shadow">
                <h3 className="text-black text-2xl font-semibold mb-2">Todo App</h3>
                <TodoForm addTodo={addTodo}/>
                {todos.length > 0 ? (
                        <TodoList todos={todos} completeTodo={completeTodo} markAsEditing={markAsEditing}
                                  updateTodo={updateTodo} cancelEdit={cancelEdit} deleteTodo={deleteTodo} remainingTodos={remainingTodos}></TodoList>
                    ) :
                    <NoTodo></NoTodo>
                }
            </div>
        </main>
    )
}

export default App
