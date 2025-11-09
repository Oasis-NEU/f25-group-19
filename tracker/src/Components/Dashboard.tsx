import React from 'react';
import '../Styles/Dashboard.css'

// --- Type Definitions ---


// --- Main App Component ---

/**
 * Main Dorm Life Dashboard component.
 * Displays user's dorm rooms and associated tasks in a responsive two-column layout.
 */
function Dashboard() {
  return (
    <div className="dashboard-container">
        
      <div className="dashboard-main-content">

        {/* Main Content Containers: Responsive Flex Layout */}
        <div className="content-wrapper">

          {/* LEFT CONTAINER: Dorm Rooms */}
          <div className="room-panel-wrapper">
            <div className="panel room-panel-content">
              <h2 className="panel-heading-rooms">
                
                <span>My Dorm Rooms</span>
              </h2>
              <div className="room-list-container">
                
              </div>
              <button className="room-join-button">
                + Join a New Room
              </button>
            </div>
          </div>

          {/* RIGHT CONTAINER: Tasks */}
          <div className="task-panel-wrapper">
            <div className="panel">
              <div className="task-panel-header">
                <h2 className="panel-heading-tasks">
                    
                    <span>Shared & Personal Tasks</span>
                </h2>
              </div>
              
              <div className="task-list-container">
                
              </div>

              <div className="task-panel-footer">
                <button className="task-add-button">
                  + Add New Task
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;