import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

export default function EmployeeDashboard() {
    return (
        <div className="min-h-screen bg-black text-white p-8">

            {/* Header */}
            <Header />

            {/* Stats Cards */}
            <TaskListNumbers />

            {/* Tasks Section */}
            <TaskList />
        </div>
    );
}