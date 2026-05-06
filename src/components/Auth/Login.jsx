import { Lock, Mail } from "lucide-react";
import { useState } from "react";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setFormData({
            email: "",
            password: "",
            remember: false,
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="bg-[#111] p-8 rounded-2xl w-80 shadow-lg">
                <h2 className="text-white text-xl font-semibold mb-6">Log In</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-3 py-2 bg-transparent border border-red-400 rounded-full text-white focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-16 py-2 bg-transparent border border-red-400 rounded-full text-white focus:outline-none"
                        />
                        <span
                            className="absolute right-4 top-2 text-sm text-gray-400 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </span>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={formData.remember}
                                onChange={handleChange}
                            />
                            Remember me
                        </label>
                        <span className="cursor-pointer hover:underline">
                            Forgot Password
                        </span>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-2 rounded-full bg-red-400 text-black font-semibold hover:opacity-90"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}