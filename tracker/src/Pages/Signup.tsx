import { useState } from 'react'
import '../Styles/Form.css'
import { Link } from 'react-router-dom'

function SignUp() {


    return (
        <>
            {/* Navbar */}
            <header className='landing-navbar'>
                <div id="logo-nav">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        M8S
                    </Link>
                </div>
            </header>        <div className="form-container">
                <form className="form-card">
                    <h2>Create Account</h2>

                    <div className="input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            //value={username}
                            //onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                        />
                    </div>

                    <div className="input-group">
                        <label>Email Address</label>
                        <input
                            type="text"
                            // value={password} easter egg
                            // onChange={(e) => setPassword(e.target.value)}
                            placeholder="name@example.com"
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="input-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            placeholder="Confirm password"
                        />
                    </div>

                    <button type="submit">
                        Create Account
                    </button>
                    {/* {message && <p className={`message ${messageType}`}>{message}</p>} */}
                </form>
            </div>
        </>

    )
}

export default SignUp