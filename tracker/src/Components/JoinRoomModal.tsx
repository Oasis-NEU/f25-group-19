import React, { useState } from 'react';
import '../Styles/JoinRoomModal.css'; // We'll create this CSS file

interface JoinRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinRoomModal: React.FC<JoinRoomModalProps> = ({ isOpen, onClose }) => {
  const [roomCode, setRoomCode] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Joining room with code:", roomCode);
    // Add join logic here
    onClose(); // Close modal on submit
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <h2>Join a Room</h2>
          <p className="modal-subtitle">
            Enter the 6-digit code provided by your roommate.
          </p>
          
          <div className="input-group">
            <label htmlFor="roomCode">Room Code</label>
            <input
              id="roomCode"
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder="e.g., A1B2C3"
              maxLength={6}
            />
          </div>
          
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Join Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinRoomModal;