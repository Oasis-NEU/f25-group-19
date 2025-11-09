import React, { useState } from 'react';
import '../Styles/Dashboard.css';
import RoomCard from './RoomCard'; // Import the new card
import JoinRoomModal from './JoinRoomModal'; // Import the new modal

// Mock data for rooms
const mockRooms = [
  { id: '1', name: 'Hilltop Hall 404', memberCount: 4, iconBg: '#e0f2fe', iconColor: '#0284c7' },
  { id: '2', name: 'The Cove', memberCount: 2, iconBg: '#dcfce7', iconColor: '#16a34a' },
  { id: '3', name: 'Parker St. Apt', memberCount: 3, iconBg: '#ffedd5', iconColor: '#f97316' },
];

function Dashboard() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [rooms, setRooms] = useState(mockRooms); // Use mock data

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-card">
          
          <h2 className="panel-heading-rooms">
            My Dorm Rooms
          </h2>
          
          <div className="room-list-container">
            {rooms.length > 0 ? (
              rooms.map(room => (
                <RoomCard key={room.id} room={room} />
              ))
            ) : (
              <p className="empty-room-message">
                You haven't joined any rooms yet.
              </p>
            )}
          </div>
          
          <button 
            className="room-join-button" 
            aria-label="Join a new room"
            onClick={() => setIsJoinModalOpen(true)} // Open the modal
          >
            + Join a New Room
          </button>

        </div>
      </div>

      {/* Render the modal */}
      <JoinRoomModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />
    </>
  );
};

export default Dashboard;