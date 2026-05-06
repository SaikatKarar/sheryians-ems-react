import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="p-8">
                <Header />
            </div>

            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Left - Form */}
                <CreateTask />

                {/* Right - Info Panel */}
                {/* <div className="bg-[#111] p-8 rounded-2xl shadow-lg flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

                    <p className="text-gray-400 mb-4">
                        Create and assign tasks to employees easily. Fill the form and click
                        "Create Task" to assign work.
                    </p>

                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>✔ Assign tasks to employees</li>
                        <li>✔ Set deadlines</li>
                        <li>✔ Manage categories</li>
                        <li>✔ Track progress</li>
                    </ul>
                </div> */}
                <AllTask />

            </div>
        </div>
    );
}