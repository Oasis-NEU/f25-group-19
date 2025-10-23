import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../Styles/Landing.css'; // Import the CSS file

function Landing() {
    return (
        // Use a Fragment to return two separate layout elements
        <>
            {/* Navbar */}
            <header className='landing-navbar'>
                <nav className='auth-links'>
                    <Link to="/login">
                        <button>
                            Sign in
                        </button>
                    </Link>
                </nav>
            </header>

            <div className='landing-container'>
                <div className='content-wrapper'>
                    <h1>M8S</h1>
                    <p>The ultimate roommate chore tracker system</p>
                    <div className='new-user-buttons'>
                        <Link to="/signup">
                            <button>
                                Get Started
                            </button>
                        </Link>
                        <button>
                            How it works
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Landing;