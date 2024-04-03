import React from "react";
// import "./appointment.css";

function AppointmentHeader() {
  return (
    <div>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Reason</th>
            <th>Notes</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default AppointmentHeader;
