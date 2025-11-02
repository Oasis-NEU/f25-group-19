import { useState } from 'react';
import { Link } from 'react-router-dom';
import NoRoom from '../Components/NoRoom'
import '../Styles/main.css';

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="user-icon">
    <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M22 25v-1.5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="11" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
    // Add logout logic here
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className='landing-navbar'>
        <div id="logo-nav">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            M8S
          </Link>
        </div>
        <nav className='auth-links'>
          <div className="user-dropdown-container">
            <button 
              className="user-icon-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <UserIcon />
            </button>
            
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/rooms" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                  Rooms
                </Link>
                <Link to="/create-room" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                  Create Room
                </Link>
                <Link to="/settings" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                  Settings
                </Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            )}
          </div>
          
        </nav>
        
      </header>
        <div>
          <NoRoom />
        </div>
    </>
  );
}

export default Home;