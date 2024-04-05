import React, { useState, useEffect } from "react";
import axios from "axios";

function Confirmed() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    var username = localStorage.getItem("username");

    axios
      .get(
        `http://localhost:8080/getAllAppointments?patientUsername=${username}&status=Confirmed`
      )
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
      <h1>Confirmed Appointments</h1>
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
              <td>{appointment.doctorUsername}</td>
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

export default Confirmed;
