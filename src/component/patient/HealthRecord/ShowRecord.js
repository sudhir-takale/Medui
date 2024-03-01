import React, { useState } from "react";

const ShowRecord = () => {
  const samplePatientData = {
    name: "John Doe",
    dateOfBirth: "1990-01-01",
    gender: "Male",
    // Add more fields as needed
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
    // Add more dummy rows as needed
  ];

  const [editableData, setEditableData] = useState(null);
  const [tableData, setTableData] = useState(initialData);
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = () => {
    setEditableData({
      srno: "",
      patientName: "",
      doctorName: "",
      date: "",
      time: "",
      notes: "",
      medicines: "",
      symptoms: "",
      healthGoals: "",
    });
  };

  const handleSave = () => {
    // Implement save logic or update API call here
    console.log("Save logic goes here:", editableData);
    setEditableData(null);
  };

  const handleAdd = () => {
    setIsAdding(true);
    setEditableData({
      srno: "",
      patientName: "John Doe", // Keep the patient name fixed
      doctorName: "",
      date: "",
      time: "",
      notes: "",
      medicines: "",
      symptoms: "",
      healthGoals: "",
    });
  };

  const handleAddSave = () => {
    // Implement logic to save the new data
    console.log("Add save logic goes here:", editableData);
    setTableData([...tableData, editableData]);
    setIsAdding(false);
    setEditableData(null);
  };

  return (
    <div>
      <h1>Patient Personal Health Record</h1>
      <div>
        <h2>{samplePatientData.name}'s Information</h2>
        {editableData ? (
          <div>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{samplePatientData.name}</td>
                </tr>
                {/* Add more fields as needed */}
              </tbody>
            </table>
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
      <div>
        <h2>Medical Records</h2>
        <button onClick={handleAdd}>Add</button>
        <table className="table table-bordered mt-2">
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
            {isAdding && (
              <tr>
                <td>
                  <input
                    type="text"
                    value={editableData.srno}
                    onChange={(e) =>
                      setEditableData({
                        ...editableData,
                        srno: e.target.value,
                      })
                    }
                  />
                </td>
                <td>{editableData.patientName}</td>
                <td>
                  <input
                    type="text"
                    value={editableData.doctorName}
                    onChange={(e) =>
                      setEditableData({
                        ...editableData,
                        doctorName: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editableData.date}
                    onChange={(e) =>
                      setEditableData({
                        ...editableData,
                        date: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editableData.time}
                    onChange={(e) =>
                      setEditableData({
                        ...editableData,
                        time: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editableData.notes}
                    onChange={(e) =>
                      setEditableData({
                        ...editableData,
                        notes: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editableData.medicines}
                    onChange={(e) =>
                      setEditableData({
                        ...editableData,
                        medicines: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editableData.symptoms}
                    onChange={(e) =>
                      setEditableData({
                        ...editableData,
                        symptoms: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editableData.healthGoals}
                    onChange={(e) =>
                      setEditableData({
                        ...editableData,
                        healthGoals: e.target.value,
                      })
                    }
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isAdding && <button onClick={handleAddSave}>Save</button>}
    </div>
  );
};

export default ShowRecord;
