import React from "react";

function SystemHealth() {
  // Dummy data for demonstration
  const systemStatus = "Healthy";

  return (
    <div className="stats-card">
      <h2>System Health</h2>
      <p>Status: {systemStatus}</p>
    </div>
  );
}

export default SystemHealth;
