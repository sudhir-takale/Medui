// Pending.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Baseurl from "../../../api/Baseurl";
import "./appointment.css";

function Pending() {
  const [pendingAppointments, setPendingAppointments] = useState([]);

  useEffect(() => {
    fetchPendingAppointments();
  }, []);

  const fetchPendingAppointments = async () => {
    try {
      const response = await axios.get(
        `${Baseurl()}/patient/appointments/pending`
      );
      setPendingAppointments(response.data);
    } catch (error) {
      console.error("Error fetching pending appointments:", error);
    }
  };

  return (
    <div>
      <h2>Pending Appointments</h2>
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
        {/* <tbody>
          {pendingAppointments.map((appointment, index) => (
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
        </tbody> */}
      </table>
    </div>
  );
}

export default Pending;
