import { useState } from 'react';
import './Landing.css'; // Import the CSS file

function Landing() {
    return (
    <div className='landing-container'> 
        <div className='content-wrapper'>
            <h1>M8S</h1>
            
            {/* Wrapper for right-aligned auth links */}
            <div className='auth-links'>
                <button>   
                    Sign In
                </button>
                <a href="/signup">Sign Up</a> 
            </div>
        </div>
    </div>)
}

export default Landing;