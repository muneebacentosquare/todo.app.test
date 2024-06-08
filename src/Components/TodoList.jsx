export default function TodoList(props) {
    return (
        <>
            <ul className="mt-2">
                {props.todos.map((todo) => (
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
        </>
    );
}