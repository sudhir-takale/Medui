import React, { useState, useEffect } from "react";
import axios from "axios";
import "./pending.css";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";

function PendingRequest() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const reject = () => {
    toast.warning("User has been Deleted!", {
      autoClose: 4000,
    });
  };

  const patientData = () => {
    toast.success("All patients has fetched!", {
      autoClose: 5000,
    });
  };

  const approve = () => {
    toast.success("User approved Successfully!", {
      autoClose: 5000,
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

    axios
      .get("http://localhost:8080/doctor/getDoctors")
      .then((response) => {
        setDoctors(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);

  const handleApprove = (username) => {
    axios
      .post("http://localhost:8080/admin/approveRequest", { username })
      .then((response) => {
        console.log("Request approved successfully");
        approve();
      })
      .catch((error) => {
        console.error("Error approving request:", error);
      });
  };

  const handleReject = (username) => {
    axios
      .post("http://localhost:8080/admin/rejectRequest", { username })
      .then((response) => {
        console.log("Request rejected successfully");
        reject();
      })
      .catch((error) => {
        console.error("Error rejecting request:", error);
      });
  };

  const mergedData = [...patients, ...doctors];

  return (
    <div className="pending-request-container">
      <h2 className="pending-request-header">Pending Requests</h2>
      <Table
        striped
        bordered
        hover
        responsive
        className="pending-request-table"
      >
        <thead className="header">
          <tr className="header">
            <th className="header">Index</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone No.</th>
            <th>Email id</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mergedData.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.patientName || data.doctorName}</td>
              <td>{data.address}</td>
              <td>{data.phoneNo}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
              <td>{data.bloodGroup}</td>
              <td>
                <div style={{ display: "flex", gap: 15 }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleApprove(data.username)}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleReject(data.username)}
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ToastContainer />
    </div>
  );
}

export default PendingRequest;
