import { useState } from 'react';
import '../Styles/Form.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  // FIXED: Correctly initialize state using useState
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const navigate = useNavigate(); // Initialize the hook

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // --- Validation ---
    if (!username || !email || !password || !confirmPassword) {
      setMessage("Please fill out all fields.");
      setMessageType("error");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }
    
    // Replace with actual API call to create user
    console.log("Creating account for:", username, email);
    setMessage("Account created successfully! Redirecting...");
    setMessageType("success");
    navigate('/setup');
    /////////////////////////////////////////////////
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
        <nav className='auth-links'>
          <div id="login-nav">
            <Link to="/login">
              <button>
                Sign in
              </button>
            </Link>
          </div>
        </nav>
      </header>
      
      <div className="form-container">
        {/* MODIFIED: Added onSubmit handler */}
        <form className="form-card" onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email" // Use type="email" for better validation
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              // FIXED: Removed "g." from "e.g.target.value"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </div>

          {/* MODIFIED: Button is now type="submit" */}
          <button type="submit">Create Account</button>
          
          {message && <p className={`message ${messageType}`}>{message}</p>}
        </form>
      </div>
    </>
  );
}

export default SignUp;