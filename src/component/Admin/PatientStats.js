import React from "react";

function PatientStats() {
  // Dummy data for demonstration
  const registeredPatients = 100;

  return (
    <div className="stats-card">
      <h2>Registered Patients</h2>
      <p>{registeredPatients}</p>
    </div>
  );
}

export default PatientStats;
