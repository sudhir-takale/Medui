import React from "react";

function UserEngagement() {
  // Dummy data for demonstration
  const userEngagement = {
    loginFrequency: "Daily",
    averageTimeSpent: "30 minutes",
  };

  return (
    <div className="stats-card">
      <h2>User Engagement</h2>
      <p>Login Frequency: {userEngagement.loginFrequency}</p>
      <p>Average Time Spent: {userEngagement.averageTimeSpent}</p>
    </div>
  );
}

export default UserEngagement;
