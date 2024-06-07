import './App.css'

function App() {
    return (
        <main>
            <div className="w-2/5 p-5 my-10 mx-auto justify-center rounded shadow">
                <h3 className="text-black text-2xl font-semibold mb-2">Todo App</h3>
                <form>
                    <input
                        className="block w-full border border-gray-200 p-2.5 rounded my-2.5 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                        type="text"
                        placeholder="What do you need to do?"/>
                </form>
                <ul className="mt-2">
                    <li className="flex justify-between items-center px-1 py-2">
                        <div className="flex items-center space-x-2.5">
                            <input type="checkbox" id="1" className="checked:bg-blue-500"/>
                            <label htmlFor="1" className="text-gray-700 text-base">Finish React Series</label>
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
                    <li className="flex justify-between items-center px-1 py-2">
                        <div className="flex items-center space-x-2.5">
                            <input type="checkbox" id="1" className="checked:bg-blue-500"/>
                            <label htmlFor="1" className="text-gray-700 text-base">Go Grocery</label>
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
                    <li className="flex justify-between items-center px-1 py-2">
                        <div className="flex items-center space-x-2.5">
                            <input type="checkbox" id="1" className="checked:bg-blue-500"/>
                            <label htmlFor="1" className="text-gray-700 text-base">Taker over world</label>
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
                </ul>
                <hr className="mt-2"/>
                <div className="flex justify-between items-center my-4">
                    <button className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Check All
                    </button>
                    <p className="text-gray-700">3 tasks remaining</p>
                </div>
                <hr/>
                <div className="flex justify-between items-center my-4">
                    <div className="flex space-x-2 items-center">
                        <button className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base">
                            All
                        </button>
                        <button className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">
                            Active
                        </button>
                        <button className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">
                            Completed
                        </button>
                    </div>
                    <button className="py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base ">Clear
                        Completed
                    </button>
                </div>
            </div>
        </main>
    )
}

export default App
