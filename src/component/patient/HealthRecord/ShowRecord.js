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
    <div className="body">
      <div className="body">
        <h2>{samplePatientData.name}'s Information</h2>
        <div className="body">
          <table className="patient-info-table">
            <tbody className="body">
              <tr>
                <td>Name:</td>
                <td>{samplePatientData.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="tables-container body">
        <div className="medical-records-table-container tablef">
          <h2>Medical Records</h2>
          <table className="medical-records-table ">
            <thead>
              <tr>
                <th>Date</th>
                <th>Doctor Name</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.doctorName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="medical-records-table-container tables body">
          <h2>Medications</h2>
          <table className="medical-records-table ">
            <thead>
              <tr>
                <th>Medicines</th>
                <th>Dose and Frequency</th>
                <th>Symptoms</th>
                <th>Health Goals</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.medicines}</td>
                  <td> {row.date}</td>
                  <td>{row.symptoms}</td>
                  <td>{row.healthGoals}</td>
                  <td>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowRecord;
