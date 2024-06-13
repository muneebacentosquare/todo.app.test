import TodoItemsRemaining from "./TodoItemsRemaining.jsx";
import ClearCompleted from "./ClearCompleted.jsx";
import useToggle from "../hooks/useToggle.js";
import CheckAllTodo from "./CheckAllTodo.jsx";
import TodoFilter from "./TodoFilter.jsx";
import {Transition} from "@headlessui/react";
import {useState} from "react";

export default function TodoList(props) {
    const [isFeatureOneVisible, setFeatureOneVisible] = useToggle(true);
    const [isFeatureTwoVisible, setFeatureTwoVisible] = useToggle(false);
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
            <div className="flex space-x-5 items-center my-4">
                <button onClick={() => setFeatureOneVisible((prevOneVisible) => !prevOneVisible)}
                        className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Toggle Feature
                    1
                </button>
                <button onClick={() => setFeatureTwoVisible((prevTwoVisible) => !prevTwoVisible)}
                        className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Toggle Feature
                    2
                </button>
            </div>
            <hr className="mt-2"/>
            <Transition
                show={isFeatureOneVisible}
                enter="transition-all duration-300 ease-in-out"
                enterFrom="transform translate-y-full"
                enterTo="transform translate-y-0"
                leave="transition-all duration-150 ease-in-out"
                leaveFrom="transform translate-y-0"
                leaveTo="transform translate-y-full"
            >
                <div className="flex justify-between items-center my-4">
                    <CheckAllTodo completeAllTodos={props.completeAllTodos}/>
                    <TodoItemsRemaining remainingTodos={props.remainingTodos}/>
                </div>
            </Transition>
            {isFeatureTwoVisible && (
                <>
                    <hr/>
                    <div className="flex justify-between items-center my-4">
                        <TodoFilter todosFiltered={props.todosFiltered} filter={filter} setFilter={setFilter}/>
                        <ClearCompleted clearCompletedTodos={props.clearCompletedTodos}/>
                    </div>
                </>
            )}
        </>
    );
}