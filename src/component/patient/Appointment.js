import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./appointment.css"; // Import the custom CSS file

const doctorsList = ["Dr. Smith", "Dr. Johnson", "Dr. Williams"]; // Your list of doctors

const AppointmentForm = ({ onCancel, onSubmit }) => {
  const [date, setDate] = useState(null);
  const [doctor, setDoctor] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onSubmit({ date, doctor, reason, notes });
  };

  const handleCancel = () => {
    // Reset form fields
    setDate(null);
    setDoctor("");
    setReason("");
    setNotes("");

    // Hide the form
    onCancel();
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
          Submit Appointment
        </button>
        <button className="Cancel-btn" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
