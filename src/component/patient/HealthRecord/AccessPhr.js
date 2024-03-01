import React, { useState } from "react";
import "./AccessPhr.css"; 

const doctorsList = [
  {
    id: 1,
    name: "Dr. Smith",
  },

  {
    id: 2,
    name: "Dr. Johnson",
  },
];

// AccessPhr component
const AccessPhr = () => {
  // State to manage the selected doctors
  const [selectedDoctors, setSelectedDoctors] = useState([]);

  // Function to handle granting access to a doctor
  const grantAccess = (doctorId) => {
    // Check if the doctor is already selected
    if (!selectedDoctors.includes(doctorId)) {
      // If not selected, add the doctor to the list
      setSelectedDoctors([...selectedDoctors, doctorId]);
    } else {
      // If already selected, remove the doctor from the list
      const updatedDoctors = selectedDoctors.filter((id) => id !== doctorId);
      setSelectedDoctors(updatedDoctors);
    }
  };

  return (
    <div>
      {" "}
      <h1>PHR System</h1> <h2>List of Doctors</h2>{" "}
      <table className="doctor-table">
        {" "}
        <thead>
          {" "}
          <tr>
            {" "}
            <th>Sr No</th> <th>Doctor Name</th> <th>Action</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {doctorsList.map((doctor, index) => (
            <tr key={doctor.id}>
              {" "}
              <td> {index + 1}</td> <td> {doctor.name}</td>{" "}
              <td>
                {" "}
                <button
                  onClick={() => grantAccess(doctor.id)}
                  className={
                    selectedDoctors.includes(doctor.id)
                      ? "revoke-button"
                      : "grant-button"
                  }
                >
                  {" "}
                  {selectedDoctors.includes(doctor.id)
                    ? "Revoke Access"
                    : "Grant Access"}
                </button>{" "}
              </td>{" "}
            </tr>
          ))}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};

export default AccessPhr;
