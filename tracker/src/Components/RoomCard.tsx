import React from 'react';
import '../Styles/Dashboard.css'; // We'll add the styles to Dashboard.css
import { Link } from 'react-router-dom';

// Define the properties for a room
interface RoomCardProps {
  room: {
    id: string;
    name: string;
    memberCount: number;
    iconBg: string; // e.g., 'bg-blue-100'
    iconColor: string; // e.g., 'text-blue-600'
  };
}

// A simple placeholder icon component
const HomeIcon = ({ color }: { color: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="room-icon"
    style={{ color: color }}
  >
    <path d="M12 3L4 9v12h5v-7h6v7h5V9l-8-6z" />
  </svg>
);

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="room-card">
      <div 
        className="room-icon-bg" 
        style={{ backgroundColor: room.iconBg }}
      >
        <HomeIcon color={room.iconColor} />
      </div>
      <div className="room-details">
        <span className="room-name">{room.name}</span>
        <span className="room-members">{room.memberCount} M8s</span>
      </div>
      <Link to={`/room/${room.id}`} className="room-view-button">
        View
      </Link>
    </div>
  );
};

export default RoomCard;