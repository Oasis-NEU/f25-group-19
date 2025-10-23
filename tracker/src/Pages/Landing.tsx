import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../Styles/Landing.css'; // Import the CSS file

function Landing() {
    return (
    <div className='landing-container'> 
        <div className='content-wrapper'>
            <h1>M8S</h1>
            
            {/* Wrapper for right-aligned auth links */}
            <div className='auth-links'>
                <Link to="/login">
                    <button>   
                        Sign in
                    </button>
                </Link>
                <Link to="/signup">Sign Up</Link> 
            </div>
        </div>
    </div>)
}

export default Landing;