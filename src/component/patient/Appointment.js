// src/components/AppointmentForm.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./appointment.css"; // Import the custom CSS file

const doctorsList = ["Dr. Smith", "Dr. Johnson", "Dr. Williams"]; // Your list of doctors

const Appointment = () => {
  const [date, setDate] = useState(null);
  const [doctor, setDoctor] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server or perform other actions)
    console.log("Appointment Details:", { date, doctor, reason, notes });
  };

  return (
    <div className="appointment-card">
      <h2>Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </div>
        <div className="form-group">
          <label>Doctor:</label>
          <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
            <option value="">Select a doctor</option>
            {doctorsList.map((doc) => (
              <option key={doc} value={doc}>
                {doc}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Reason:</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Notes:</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <button className="Submit-btn" type="submit">
          Submit Appointmet
        </button>
      </form>
    </div>
  );
};

export default Appointment;
