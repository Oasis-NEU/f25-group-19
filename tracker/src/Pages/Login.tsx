import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Form.css'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // 'success' or 'error'

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Example: basic validation
        if (!username || !password) {
            setMessage("Please fill out both fields.");
            setMessageType("error");
            return;
        }

        // TODO: Replace with actual authentication logic
        if (username === "luisisthegoat" && password === "67brainrot") {
            setMessage("✅ Login successful!");
            setMessageType("success");
        } else {
            setMessage("❌ Invalid username or password.");
            setMessageType("error");
        }
    };

    return (
        <div className="form-container">
            <form className="form-card" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <div className='input-group'>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </div>

                <div className='input-group'>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </div>

                <button type="submit">
                    Log In
                </button>
                <Link to="/signup">Sign Up</Link>
                {message && <p className={`message ${messageType}`}>{message}</p>}
            </form>
        </div>
    );
}

export default Login