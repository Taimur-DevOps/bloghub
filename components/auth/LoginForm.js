import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Use the useRouter hook directly inside the component (valid hook usage)
    //   const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/auth/login", { email, password });
            // Store JWT token in localStorage or cookie
            localStorage.setItem("token", response.data.token);
            // Redirect to dashboard after successful login
            //   router.push("/dashboard");
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">Login</h2>

            {error && <p className="mt-2 text-red-500 text-center">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
