import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import { supabase } from '../supabase-client'
import '../Styles/Form.css'


function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // 'success' or 'error'

    const handleButtonClick = () => {
        // Navigate to the '/about' page
        navigate('/home');
      };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
    
        if (!username || !password) {
            setMessage("Please fill out both fields.");
            setMessageType("error");
            return;
        }

        // TODO: Replace with actual authentication logic
        if (username === "123" && password === "123") {
            setMessage("✅ Login successful!");
            setMessageType("success");
            handleButtonClick();
        
        } else {
            setMessage("❌ Invalid username or password.");
            setMessageType("error");
        }
    };

    return (
        <>
            {/* Navbar */}
            <header className='landing-navbar'>
                <div id="logo-nav">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        M8S
                    </Link>
                </div>
            </header>
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

                    <button type="submit">Log In</button>
                    <div className="signup-link">
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    {message && <p className={`message ${messageType}`}>{message}</p>}
                </form>
            </div>
        </>

    );
}

export default Login