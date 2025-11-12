import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
    setIsDropdownOpen(false);
  };

  return (
    <header className='landing-navbar'>
      <div id="logo-nav">
        <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          M8S
        </Link>
      </div>
      <nav className='auth-links'>
        <div className="user-dropdown-container">
          <button 
            className="user-icon-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              className="user-icon"
            >
              <path 
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" 
                fill="currentColor"
              />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/rooms" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                Rooms
              </Link>
              <Link to="/settings" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                Settings
              </Link>
              <hr></hr>
              <Link to="/" className="dropdown-item" onClick={handleLogout}>
                Log Out
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;