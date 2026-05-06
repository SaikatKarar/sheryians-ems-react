import React from 'react'

function TaskListNumbers() {
    return (
        <div className="grid grid-cols-4 gap-6 mb-10">
            <div className="bg-blue-500 p-6 rounded-xl">
                <h2 className="text-3xl font-bold">0</h2>
                <p>New Task</p>
            </div>

            <div className="bg-green-500 p-6 rounded-xl">
                <h2 className="text-3xl font-bold">3</h2>
                <p>Completed</p>
            </div>

            <div className="bg-yellow-400 text-black p-6 rounded-xl">
                <h2 className="text-3xl font-bold">0</h2>
                <p>Accepted</p>
            </div>

            <div className="bg-orange-500 p-6 rounded-xl">
                <h2 className="text-3xl font-bold">1</h2>
                <p>Failed</p>
            </div>
        </div>
    )
}

export default TaskListNumbers