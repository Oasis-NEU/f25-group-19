import { useState } from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/main.css';

function Settings() {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <>
      <Navbar />
      <div className='settings-container'>
        <div className='settings-card'>
          <section className='settings-tabs'>
            <button 
              className={`tablinks ${activeTab === 'account' ? 'active' : ''}`}
              onClick={() => setActiveTab('account')}
            >
              Account
            </button>
            <button 
              className={`tablinks ${activeTab === 'appearances' ? 'active' : ''}`}
              onClick={() => setActiveTab('appearances')}
            >
              App
            </button>
            <button 
              className={`tablinks ${activeTab === 'presets' ? 'active' : ''}`}
              onClick={() => setActiveTab('presets')}
            >
              Presets
            </button>
            <button 
              className={`tablinks ${activeTab === 'roommates' ? 'active' : ''}`}
              onClick={() => setActiveTab('roommates')}
            >
              Mates
            </button>
          </section>

          <div className='settings-content'>
            {activeTab === 'account' && (
              <>
                <h2>Account Settings</h2>
                <p>Settings</p>
              </>
            )}
            {activeTab === 'appearances' && (
              <>
                <h2>Appearances</h2>
                <p>Settings</p>
              </>
            )}
            {activeTab === 'presets' && (
              <>
                <h2>Presets</h2>
                <p>Settings</p>
              </>
            )}
            {activeTab === 'roommates' && (
              <>
                <h2>Roommates</h2>
                <p>Settings</p>
              </>
            )}
          </div>

          <div className='settings-profile'>

          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;