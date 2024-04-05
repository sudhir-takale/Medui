import React, { useState, useEffect } from "react";
import axios from "axios";
import "./list.css";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";

function PatientList() {
  const [patients, setPatients] = useState([]);

  const patientData = () => {
    toast.success("All patients has fetched!", {
      autoClose: 2000,
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/patient/getPatients")
      .then((response) => {
        setPatients(response.data);
        console.log(response.data);
        patientData();
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }, []);

  return (
    <Table striped hover responsive style={{ margin: "0", padding: "0" }}>
      <thead className="header">
        <tr className="header">
          <th
            className="header"
            style={{ backgroundColor: "red", padding: "5px" }}
          >
            Index
          </th>
          <th>Patient Name</th>
          <th>Address</th>
          <th>Phone No.</th>
          <th>Email id</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Blood G</th>
          <th>Joined On</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr key={patient.id}>
            <td>{index + 1}</td>
            <td>{patient.patientName}</td>
            <td>{patient.address}</td>
            <td>{patient.phoneNo}</td>
            <td>{patient.email}</td>
            <td>{patient.age}</td>
            <td>{patient.gender}</td>
            <td>{patient.bloodGroup}</td>
            <td>{patient.createdDate}</td>
          </tr>
        ))}
      </tbody>
      <ToastContainer />
    </Table>
  );
}

export default PatientList;
