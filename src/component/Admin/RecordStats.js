import React from "react";

function RecordStats() {
  // Dummy data for demonstration
  const totalRecords = 500;

  return (
    <div className="stats-card">
      <h2>Total Records</h2>
      <p>{totalRecords}</p>
    </div>
  );
}

export default RecordStats;
