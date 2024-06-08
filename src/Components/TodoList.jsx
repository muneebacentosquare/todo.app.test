import TodoItemsRemaining from "./TodoItemsRemaining.jsx";
import ClearCompleted from "./ClearCompleted.jsx";
import CheckAllTodo from "./CheckAllTodo.jsx";
import TodoFilter from "./TodoFilter.jsx";
import {useState} from "react";

export default function TodoList(props) {
    const [filter, setFilter] = useState('all');

    return (
        <>
            <ul className="mt-2">
                {props.todosFiltered(filter).map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center px-1 py-2">
                        <div className="flex items-center space-x-2.5">
                            <input type="checkbox"
                                   id={todo.id}
                                   checked={todo.isComplete ? true : false}
                                   onChange={() => props.completeTodo(todo.id)}
                                   className="checked:bg-blue-500"
                            />
                            {!todo.isEditing ? (
                                <label onDoubleClick={() => props.markAsEditing(todo.id)}
                                       className={`text-gray-700 text-base ${todo.isComplete ? 'line-through' : ''}`}>
                                    {todo.title}
                                </label>
                            ) : (
                                <input
                                    className="block w-full border border-gray-200 p-2.5 rounded my-2.5 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                                    type="text"
                                    onBlur={(event) => updateTodo(event, todo.id)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            props.updateTodo(event, todo.id);
                                        } else if (event.key === 'Escape') {
                                            props.cancelEdit(event, todo.id);
                                        }
                                    }}
                                    defaultValue={todo.title}
                                    placeholder="What do you need to do?"/>
                            )}
                        </div>
                        <button onClick={() => props.deleteTodo(todo.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="#696969" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
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
                <CheckAllTodo completeAllTodos={props.completeAllTodos}/>
                <TodoItemsRemaining remainingTodos={props.remainingTodos}/>
            </div>
            <hr/>
            <div className="flex justify-between items-center my-4">
                <TodoFilter todosFiltered={props.todosFiltered} filter={filter} setFilter={setFilter} />
                <ClearCompleted clearCompletedTodos={props.clearCompletedTodos}/>
            </div>
        </>
    );
}