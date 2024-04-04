import React from "react";

function DoctorStats() {
  // Dummy data for demonstration
  const registeredDoctors = 50;

  return (
    <div className="stats-card">
      <h2>Registered Doctors</h2>
      <p>{registeredDoctors}</p>
    </div>
  );
}

export default DoctorStats;
