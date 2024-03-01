import React, { useEffect, useState } from "react";

const Demo = () => {
  const [patientData, setPatientData] = useState(null);
  const [editableData, setEditableData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual backend API endpoint
    fetch("your-api-endpoint/patient-data")
      .then((response) => response.json())
      .then((data) => {
        setPatientData(data);
        setEditableData({ ...data }); // Create a copy for editing
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
        setLoading(false);
      });
  }, []);

  const handleEdit = () => {
    // Enable editing by copying the patient data
    setEditableData({ ...patientData });
  };

  const handleSave = () => {
    // Send the updated data to the backend (replace with your actual API endpoint)
    fetch("your-api-endpoint/update-patient-data", {
      method: "PUT", // or 'POST' depending on your API
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editableData),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        setPatientData(updatedData);
        setEditableData(null);
      })
      .catch((error) => {
        console.error("Error updating patient data:", error);
      });
  };

  return (
    <div>
      <h1>Patient Personal Health Record</h1>
      {loading ? (
        <p>Loading patient data...</p>
      ) : (
        <div>
          <h2>{patientData && patientData.name}'s Information</h2>
          {editableData ? (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>
                      <input
                        type="text"
                        value={editableData.name || ""}
                        onChange={(e) =>
                          setEditableData({
                            ...editableData,
                            name: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>DOB:</td>
                    <td>
                      <input
                        type="text"
                        value={editableData.dateOfBirth || ""}
                        onChange={(e) =>
                          setEditableData({
                            ...editableData,
                            dateOfBirth: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>
                      <input
                        type="text"
                        value={editableData.gender || ""}
                        onChange={(e) =>
                          setEditableData({
                            ...editableData,
                            gender: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  {/* Add more fields as needed */}
                </tbody>
              </table>
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div>
              <p>DOB: {patientData.dateOfBirth}</p>
              <p>Gender: {patientData.gender}</p>
              {/* Add more fields as needed */}
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Demo;
