import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../Styles/Landing.css'; // Import the CSS file

function Landing() {
    return (
        // Use a Fragment to return two separate layout elements
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

            <section className="landing-section">
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
                            <ScrollLink to="how-it-works" smooth={true} duration={50}>
                                <button>
                                    How it works
                                </button>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-it-works">
                <h2>How it Works</h2>
                <p>
                    M8S is a program that enables roommates to track and complete tasks, using customizable
                    organization tools and integrated features to enable users to adapt chores to the needs of shared spaces.
                </p>
                <h3>Create your Space</h3>
                <p>
                    Create new rooms and configure your preferences or join existing groups easily using the unique code assigned to each room.
                </p>
            </section>

        </>
    )
}

export default Landing;