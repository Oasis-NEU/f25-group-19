import React, { useState } from 'react';
import '../Styles/NoRoom.css';
import { Link } from 'react-router-dom'; // Import Link

function NoRoom() {
  const [showJoin, setShowJoin] = useState(false);
  const [code, setCode] = useState('');
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const openJoin = () => setShowJoin(true);
  const closeJoin = () => {
    setCode('');
    setMessage('');
    setMessageType('');
    setShowJoin(false);
  };

  const submitJoin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with join-room logic (API / sockets)
    console.log('Attempt join room with code:', code);

    if (code.length !== 6) { // Simplified check
      setMessage("Room code must be 6 characters long");
      setMessageType("error");
      return; // Stop execution
    }

    // --- Placeholder Logic ---
    // Replace with Check in db for roomcode match
    if (code === "123456") {
      setMessage("Successfully joined room!");
      setMessageType("success");
      // TODO: Navigate to the room
      // navigate(`/room/${roomId}`);
    } else {
      setMessage("Invalid room code. Please try again.");
      setMessageType("error");
    }
    // --- End Placeholder ---
  };

  return (
    <>
      {showJoin ? (
        <div className="no-room-wrapper">
          <div className="join-room-container">
            <h2 className="lobby-title">Join a Room</h2>
            <form className="join-room-form" onSubmit={submitJoin}>
              <input
                className="join-code-input"
                placeholder="Enter Room Code"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())} // Force uppercase
                aria-label="6 Digit Room Code"
                maxLength={6}
              />

              <div className="button-group">
                <button type="submit" className="lobby-button join-room-btn">Join</button>
                <button type="button" className="lobby-button back-btn" onClick={closeJoin}>Back</button>
              </div>
            </form>
            {message && <p className={`message ${messageType}`}>{message}</p>}
          </div>
        </div>
      ) : (
        <div className="no-room-wrapper">
          <div className="room-lobby-container">
            <h2 className="lobby-title">You're not in a room yet...</h2>

            {/* Button Container */}
            <div className="button-group">
              {/* MODIFIED: Used Link component for navigation */}
              <Link to="/createRoom" className="lobby-button create-room-btn">
                Create a Room
              </Link>

              {/* Join Room Button */}
              <button className="lobby-button join-room-btn" onClick={openJoin}>
                Join a Room with Code
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoRoom;