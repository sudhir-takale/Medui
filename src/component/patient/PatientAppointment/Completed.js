import React, { useState, useEffect } from "react";
import axios from "axios";

function Completed() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/manage-appointment/{Completed}")
      .then((response) => {
        setAppointments(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  return (
    <div>
      <h1>Completed Appointments</h1>
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
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Completed;
