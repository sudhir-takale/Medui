import React from "react";

function AppointmentStats() {
  // Dummy data for demonstration
  const totalAppointments = 300;

  return (
    <div className="stats-card">
      <h2>Total Appointments</h2>
      <p>{totalAppointments}</p>
    </div>
  );
}

export default AppointmentStats;
