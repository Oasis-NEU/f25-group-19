import React, { useState } from 'react';
import '../Styles/NoRoom.css';
//import { LogIn, Users } from 'lucide-react'; 

function NoRoom() {
  const [showJoin, setShowJoin] = useState(false);
  const [code, setCode] = useState('');
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const openJoin = () => setShowJoin(true);
  const closeJoin = () => {
    setCode('');
    setShowJoin(false);
  };

  const submitJoin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with join-room logic (API / sockets)
    console.log('Attempt join room with code:', code);

    if (code.length < 6 || code.length > 6) {
      setMessage("Room code must be 6 characters long");
      setMessageType("Error");
    }

    if (true /* Replace with Check in db for roomcode match */ ) {

    }
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
                onChange={(e) => setCode(e.target.value)}
                aria-label="6 Digit Room Code"
              />

              <div className="button-group">
                <button type="submit" className="lobby-button join-room-btn">Join</button>
                <button type="button" className="lobby-button back-btn" onClick={closeJoin}>Back</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="no-room-wrapper">
          <div className="room-lobby-container">
            <h2 className="lobby-title">You're not in a room yet...</h2>

            {/* Button Container */}
            <div className="button-group">
              <button className="lobby-button create-room-btn">Create a Room</button>

              {/* Join Room Button */}
              <button className="lobby-button join-room-btn" onClick={openJoin}>Join a Room with Code</button>
            </div>
          </div>
          {message && <p className={`message ${messageType}`}>{message}</p>}
        </div>
      )}
    </>
  );
};

export default NoRoom;