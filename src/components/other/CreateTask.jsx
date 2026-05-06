import { useState } from "react";

export default function CreateTask() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        assignTo: "",
        category: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task Created:", formData);
    };

    return (
        <div className="bg-[#111] p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Create Task</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Title */}
                <div>
                    <label className="text-sm text-gray-400">Task Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Make a UI design"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-red-500 outline-none"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="text-sm text-gray-400">Description</label>
                    <textarea
                        name="description"
                        rows="4"
                        maxLength={500}
                        placeholder="Write task details..."
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-red-500 outline-none"
                    />
                </div>

                {/* Row Inputs */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-gray-400">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-red-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-red-500 outline-none"
                        >
                            <option value="">Select</option>
                            <option value="Design">Design</option>
                            <option value="Development">Development</option>
                            <option value="Testing">Testing</option>
                        </select>
                    </div>
                </div>

                {/* Assign */}
                <div>
                    <label className="text-sm text-gray-400">Assign To</label>
                    <input
                        type="text"
                        name="assignTo"
                        placeholder="Employee name"
                        value={formData.assignTo}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-red-500 outline-none"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-red-500 py-3 rounded-lg font-semibold hover:opacity-90"
                >
                    Create Task
                </button>
            </form>
        </div>
    );
}