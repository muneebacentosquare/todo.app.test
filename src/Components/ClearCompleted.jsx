export default function ClearCompleted(props){
    return (
        <button onClick={props.clearCompletedTodos} className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Clear
            Completed
        </button>
    );
}