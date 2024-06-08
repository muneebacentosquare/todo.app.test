export default function TodoFilter(props) {
    return (
        <div className="flex space-x-2 items-center">
            <button onClick={() => {
                props.setFilter('all');
                props.todosFiltered('all')
            }}
                    className={`py-1 px-2.5 text-black text-base ${props.filter === 'all' ? 'rounded border border-gray-200 text-gray-600' : ''}`}>
                All
            </button>
            <button onClick={() => {
                props.setFilter('active');
                props.todosFiltered('active')
            }}
                    className={`py-1 px-2.5 text-black text-base ${props.filter === 'active' ? 'rounded border border-gray-200 text-gray-600' : ''}`}>
                Active
            </button>
            <button onClick={() => {
                props.setFilter('completed');
                props.todosFiltered('completed')
            }}
                    className={`py-1 px-2.5 text-black text-base ${props.filter === 'completed' ? 'rounded border border-gray-200 text-gray-600' : ''}`}>
                Completed
            </button>
        </div>
    );
}