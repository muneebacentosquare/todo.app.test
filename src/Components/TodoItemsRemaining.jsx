export default function TodoItemsRemaining(props){
    return (
        <p className="text-gray-700">{props.remainingTodos()} tasks remaining</p>
    );
}