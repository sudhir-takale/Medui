import React from "react";

function ActiveUserStats() {
  // Dummy data for demonstration
  const activeUsers = 200;

  return (
    <div className="stats-card">
      <h2>Active Users</h2>
      <p>{activeUsers}</p>
    </div>
  );
}

export default ActiveUserStats;
