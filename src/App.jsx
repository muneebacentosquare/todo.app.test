import useLocalStorage from "./hooks/useLocalStorage.js";
import {useEffect, useRef} from "react";
import TodoForm from "./Components/TodoForm.jsx";
import TodoList from "./Components/TodoList.jsx";
import NoTodo from "./Components/NoTodo.jsx";
import './App.css'

function App() {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [idForTodo, setIdForTodo] = useLocalStorage('idForTodo', 1);
    const [name, setName] = useLocalStorage('name', '');
    const nameInputElement = useRef(null);
    useEffect(() => {
        nameInputElement.current.focus();
    }, []);

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

    function clearCompletedTodos() {
        setTodos([...todos].filter((todo) => !todo.isComplete));
    }

    function completeAllTodos() {
        const updateTodos = todos.map((todo) => {
            todo.isComplete = true;
            return todo;
        });
        setTodos(updateTodos);
    }

    function todosFiltered(filter) {
        if (filter === 'all') {
            return todos;
        } else if (filter === 'active') {
            return todos.filter((todo) => !todo.isComplete);
        } else if (filter === 'completed') {
            return todos.filter((todo) => todo.isComplete);
        }
    }

    function handleNameInput(event) {
        setName(event.target.value);
    }

    return (
        <main>
            <div className="w-2/5 p-5 my-10 mx-auto justify-center rounded shadow">
                <h3 className="text-black text-2xl font-semibold mb-2">What's your name?</h3>
                <form action="#" className="w-full">
                    <input
                        className="block w-full border border-gray-200 p-2.5 rounded my-2.5 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                        type="text"
                        ref={nameInputElement}
                        value={name}
                        onChange={handleNameInput}
                        placeholder="Enter Name.."/>
                </form>
                {name && (<p>Hello,{name}</p>)}
                <h3 className="text-black text-2xl font-semibold mb-2">Todo App</h3>
                <TodoForm addTodo={addTodo}/>
                {todos.length > 0 ? (
                        <TodoList todos={todos} completeTodo={completeTodo} markAsEditing={markAsEditing}
                                  updateTodo={updateTodo} cancelEdit={cancelEdit} deleteTodo={deleteTodo}
                                  remainingTodos={remainingTodos} clearCompletedTodos={clearCompletedTodos}
                                  completeAllTodos={completeAllTodos} todosFiltered={todosFiltered}></TodoList>
                    ) :
                    <NoTodo></NoTodo>
                }
            </div>
        </main>
    )
}

export default App
