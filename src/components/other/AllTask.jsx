import React from "react";

const dummyTasks = [
    {
        title: "Design Landing Page",
        assignTo: "Sarthak",
        date: "20 Feb 2024",
        category: "Design",
        status: "New",
    },
    {
        title: "Fix Login Bug",
        assignTo: "Rahul",
        date: "18 Feb 2024",
        category: "Development",
        status: "Completed",
    },
    {
        title: "API Testing",
        assignTo: "Aman",
        date: "15 Feb 2024",
        category: "Testing",
        status: "Failed",
    },
];

function AllTask() {
    return (
        <div className="bg-[#111] p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-white">All Tasks</h2>

            {/* Table Header */}
            <div className="grid grid-cols-5 text-gray-400 text-sm border-b border-gray-700 pb-2 mb-3">
                <span>Title</span>
                <span>Assigned To</span>
                <span>Date</span>
                <span>Category</span>
                <span>Status</span>
            </div>

            {/* Task List */}
            <div className="space-y-3">
                {dummyTasks.map((task, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-5 items-center bg-black p-3 rounded-lg text-sm"
                    >
                        <span>{task.title}</span>
                        <span>{task.assignTo}</span>
                        <span>{task.date}</span>
                        <span>{task.category}</span>

                        {/* Status Badge */}
                        <span
                            className={`px-2 py-1 rounded text-xs w-fit ${task.status === "New"
                                ? "bg-blue-500"
                                : task.status === "Completed"
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                }`}
                        >
                            {task.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllTask;