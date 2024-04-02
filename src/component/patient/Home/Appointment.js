import React, { useState } from "react";
import axios from "axios";
import "./Appointment.css";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    reason: "",
    mode: "",
    doctor: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.name);
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/patient/requestAppointment",
        formData
      );

      if (response.status === 200) {
        console.log("Appointment booked successfully");
        alert("Appointment booked Successfully!");
      } else {
        console.error("Failed to book appointment");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Make fields valid");
      }
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: undefined,
    });
  };

  return (
    <div
      className="flex items-center mx-5 h-full"
      style={{
        width: "500px",
        border: "1px solid white",
        boxShadow: "2px 2px 3px white",
      }}
    >
      <div className="p-8 rounded-md">
        <h2 className="text-3xl font-semibold mb-3">Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-white-600">Enter you Name</label>

            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={formData.name}
              placeholder="Enter you Name"
              className="w-full border-b-2 border-gray-400  roundme focus:outline-none focus:border-blue-500"
            />
            {errors.name && <span className="errors">{errors.name}</span>}
          </div>

          <div className="flex mb-2">
            <div className="mr-2">
              <label className="block text-gray-600">Select Date</label>
              <input
                placeholder="Select Appointment Date"
                type="date"
                className="w-full border-b-2 roundme border-gray-400 focus:outline-none focus:border-blue-500"
              />
              {errors.date && <span className="errors">{errors.date}</span>}
            </div>
            <div className="ml-2">
              <label className="block text-gray-600">Enter Time</label>
              <input
                placeholder="select Time"
                type="time"
                name="time"
                className="w-full border-b-2 roundme border-gray-400 focus:outline-none focus:border-blue-500"
              />
              {errors.time && <span className="errors">{errors.time}</span>}
            </div>
          </div>

          <div className="flex mb-2">
            <div className="mr-2">
              <label className="block text-gray-600">
                Enter Reason of Appointment
              </label>
              <input
                placeholder="Enter Reason For appointment"
                type="text"
                name="reason"
                className="w-full border-b-2 roundme border-gray-400 focus:outline-none focus:border-blue-500"
              />
              {errors.reason && <span className="errors">{errors.reason}</span>}
            </div>
            <div className="ml-2">
              <label className="block text-white-600">Select Mode</label>
              <select className="w-full border roundme border-gray-400 focus:outline-none focus:border-blue-500">
                <option>Select mode</option>
                <option value="doctor1">Physical Consult</option>
                <option value="doctor2">Tele Consult</option>
              </select>
              {errors.mode && <span className="errors">{errors.mode}</span>}
            </div>
          </div>

          <div className="ml-2">
            <label className="block text-white-600">Select The Doctor</label>
            <select className="w-full border roundme border-gray-400 focus:outline-none focus:border-blue-500">
              <option>Select doctor name</option>
              <option value="doctor1">Dr. Sanket</option>
              <option value="doctor2">Dr. Pruthvi</option>
              <option value="doctor3">Dr. Ajay</option>
              <option value="doctor3">Dr. Rahul</option>
              {/* Add more options as needed */}
            </select>
            {errors.doctor && <span className="errors">{errors.doctor}</span>}
          </div>
          <div className="mb-2">
            <label className="block text-gray-600">Enter Notes</label>
            <input
              type="text"
              name="notes"
              placeholder="Enter Notes if Any"
              className="w-full border-b-2 border-gray-400 roundme focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Display validation errors */}

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 block mx-auto roundmee text-center hover:bg-primary-700 focus:outline-none focus:shadow-outline-blue"
          >
            Book An Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
