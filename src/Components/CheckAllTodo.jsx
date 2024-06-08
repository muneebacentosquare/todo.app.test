export default function CheckAllTodo(props){
    return (
        <button onClick={props.completeAllTodos} className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Check All
        </button>
    );
}