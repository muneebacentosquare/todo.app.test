export default function NoTodo(){
    return (
        <div className="flex justify-center my-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-file-text">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                <path d="M10 9H8"/>
                <path d="M16 13H8"/>
                <path d="M16 17H8"/>
            </svg>
            <p className="text-center text-black text-xl font-medium">Add tasks</p>
        </div>
    );
}