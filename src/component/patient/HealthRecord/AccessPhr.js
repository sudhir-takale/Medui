import React, { useState, useEffect } from "react";
import "./AccessPhr.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AccessPhr = () => {
  const [doctors, setDoctors] = useState([]);

  const revokeAccessed = () => toast.success("Access revoked successfully!");

  useEffect(() => {
    axios
      .get("http://localhost:8080/doctor/getDoctors")
      .then((response) => {
        setDoctors(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }, []);

  const revokeAccess = (username) => {
    axios
      .delete(`http://localhost:8080/doctor/revokeAccess/${username}`)
      .then((response) => {
        console.log("Access revoked successfully");
        revokeAccessed();
      })
      .catch((error) => {
        console.error("Error revoking access:", error);
      });
  };

  return (
    <div>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Doctor Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td>{index + 1}</td>
              <td>
                {doctor.firstName}
                {doctor.lastName}
              </td>
              <td>
                <button
                  className="grant-button"
                  onClick={() => revokeAccess(doctor.username)}
                >
                  Revoke Access
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default AccessPhr;
