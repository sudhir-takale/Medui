import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Updateuser.css";

const UpdateProfilePatient = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
    field8: "",
    field9: "",
    field10: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data from localStorage and set it to userData state
        const patientData = {
          name: localStorage.getItem("patientName"),
          email: localStorage.getItem("email"),
          field3: localStorage.getItem("mobile"),
          field4: localStorage.getItem("age"),
          field5: localStorage.getItem("address"),
          // Add other fields as needed
        };
        setUserData(patientData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/patient/updateprofile/${localStorage.getItem(
          "username"
        )}`,
        userData
      );
      console.log("User information updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-row">
            <label>
              Patient name
              <input
                type="text"
                name="name"
                value={userData.PatientName}
                onChange={handleChange}
              />
            </label>
            <label>
              User Email
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-row">
            <label>
              User Mobile Number
              <input
                type="text"
                name="field3"
                value={userData.mobileNo}
                onChange={handleChange}
              />
            </label>
            <label>
              User Address
              <input
                type="text"
                name="field4"
                value={userData.address}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-row">
            <label>
              User Age
              <input
                type="number"
                name="field5"
                value={userData.age}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-row">
            <label>
              User Blood Group
              <input
                type="text"
                name="field7"
                value={userData.bloodGroup}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <button type="submit">Update Information</button>
      </form>
    </div>
  );
};

export default UpdateProfilePatient;
