import React, { useState } from "react";
import "./showrecord.css";

const ShowRecord = () => {
  const samplePatientData = {
    name: "John Doe",
    dateOfBirth: "1990-01-01",
    gender: "Male",
  };

  const initialData = [
    {
      srno: 1,
      patientName: "John Doe",
      doctorName: "Dr. Smith",
      date: "2024-03-01",
      time: "10:00 AM",
      notes: "Lorem ipsum dolor sit amet.",
      medicines: "Aspirin",
      symptoms: "Fever",
      healthGoals: "Stay healthy",
    },
  ];

  const [tableData] = useState(initialData);

  return (
    <div>
      <div>
        <h2>{samplePatientData.name}'s Information</h2>

        <div>
          <table className="patient-info-table">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{samplePatientData.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h2>Medical Records</h2>
        <table className="medical-records-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Patient Name</th>
              <th>Doctor Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Notes</th>
              <th>Medicines</th>
              <th>Symptoms</th>
              <th>Health Goals</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.srno}</td>
                <td>{row.patientName}</td>
                <td>{row.doctorName}</td>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>{row.notes}</td>
                <td>{row.medicines}</td>
                <td>{row.symptoms}</td>
                <td>{row.healthGoals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowRecord;
