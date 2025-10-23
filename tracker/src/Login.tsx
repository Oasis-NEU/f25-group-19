import { useState } from 'react'
import './Login.css'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Example: basic validation
        if (!username || !password) {
            setMessage("Please fill out both fields.");
            return;
        }

        // TODO: Replace with actual authentication logic
        if (username === "luisisthegoat" && password === "67brainrot") {
            setMessage("✅ Login successful!");
        } else {
            setMessage("❌ Invalid username or password.");
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "50px auto", fontFamily: "sans-serif" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 10 }}>
                    <label>Username:</label><br />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <button type="submit" style={{ width: "100%", padding: "10px" }}>
                    Log In
                </button>
            </form>
            {message && <p style={{ marginTop: 15 }}>{message}</p>}
        </div>
    );
}

export default Login