import React, { useState } from 'react';
import '../Styles/NoRoom.css';
//import { LogIn, Users } from 'lucide-react'; 

function NoRoom() {
    return (
        <div className="room-lobby-container">
      <h2 className="lobby-title">
        Ready to Connect?
      </h2>
      
      {/* Button Container */}
      <div className="button-group">
        
        {/* Create Room Button */}
        <button
          // onClick={handleCreateRoom}
          className="lobby-button create-room-btn"
        >
          Create Room
        </button>

        {/* Join Room Button */}
        <button
          // onClick={handleJoinRoom}
          className="lobby-button join-room-btn"
        >
         
          Join Room with Code
        </button>
      </div>
      
      <p className="lobby-description">
        Host a new session or join an existing one to get started.
      </p>
    </div>
    );
};

export default NoRoom;