import React from 'react'

function TaskList() {
    return (
        <div className="grid grid-cols-3 gap-6">

            {/* Task Card */}
            <div className="bg-red-400 p-5 rounded-xl text-black">
                <div className="flex justify-between text-sm mb-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded">
                        High
                    </span>
                    <span>20 Feb 2024</span>
                </div>
                <h3 className="font-bold text-lg">Ek aur task</h3>
                <p className="text-sm">
                    Task jaisa kabhi nahi dekha hoga waisa
                </p>
            </div>

            <div className="bg-green-400 p-5 rounded-xl text-black">
                <div className="flex justify-between text-sm mb-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded">
                        High
                    </span>
                    <span>20 Feb 2024</span>
                </div>
                <h3 className="font-bold text-lg">Example task</h3>
                <p className="text-sm">
                    Aisa kabhi nahi dekha hoga jaisa
                </p>
            </div>

            <div className="bg-blue-400 p-5 rounded-xl text-black">
                <div className="flex justify-between text-sm mb-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded">
                        High
                    </span>
                    <span>8 Feb 2024</span>
                </div>
                <h3 className="font-bold text-lg">Another task</h3>
                <p className="text-sm">
                    Unique task description here
                </p>
            </div>

        </div>
    )
}

export default TaskList