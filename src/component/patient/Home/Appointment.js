import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Appointment.css";
import { ToastContainer, toast, Bounce } from "react-toastify";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    reason: "",
    doctor: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/doctor/getDoctors"
        );
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      const dateValue = new Date(value);
      const formattedDate = dateValue.toISOString().split("T")[0];
      setFormData({
        ...formData,
        [name]: formattedDate,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setErrors({
      ...errors,
      [name]: undefined,
    });
  };

  const logged = () =>
    toast.success("Appointment Booked Successfully !", {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });


const checkError = () =>
  toast.error("Invalid Field Data !", {
    position: "top-right",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });






  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loggedInUser = "sudhir";
      const selectedDoctorUsername = formData.doctor;
      const time = formData.time;
      const reason = formData.reason;
      const notes = formData.notes;

      const requestData = {
        ...formData,
        patientUsername: loggedInUser,
        doctorUsername: selectedDoctorUsername,
        notes: notes,
        reason: reason,
        time: time,
      };

      const response = await axios.post(
        "http://localhost:8080/patient/requestAppointment",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        logged();
      } else {
        console.error("Failed to book appointment");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
       checkError();
      }
      console.error("Error:", error);
    }
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
            <label className="block text-white-600">Enter your Name</label>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={formData.name}
              placeholder="Enter your Name"
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
                name="date"
                onChange={handleChange}
                className="w-full border-b-2 roundme border-gray-400 focus:outline-none focus:border-blue-500"
              />
              {errors.date && <span className="errors">{errors.date}</span>}
            </div>
            <div className="ml-2">
              <label className="block text-gray-600">Enter Time</label>
              <input
                placeholder="Select Time (24-hour format)"
                type="time"
                name="time"
                onChange={handleChange}
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
                onChange={handleChange}
                className="w-full border-b-2 roundme border-gray-400 focus:outline-none focus:border-blue-500"
              />
              {errors.reason && <span className="errors">{errors.reason}</span>}
            </div>
            <div className="ml-2">
              <label className="block text-white-600">Select Mode</label>
              <select
                className="w-full border roundme border-gray-400 focus:outline-none focus:border-blue-500"
                name="mode"
                onChange={handleChange}
              >
                <option value="">Select mode</option>
                <option value="doctor1">Physical Consult</option>
                <option value="doctor2">Tele Consult</option>
              </select>
              {errors.mode && <span className="errors">{errors.mode}</span>}
            </div>
          </div>

          <div className="ml-2">
            <label className="block text-white-600">Select The Doctor</label>
            <select
              className="w-full border roundme border-gray-400 focus:outline-none focus:border-blue-500"
              name="doctor"
              onChange={handleChange}
            >
              <option value="">Select doctor name</option>
              {doctors.map((doctor, index) => (
                <option key={index} value={doctor.username}>
                  {`${doctor.firstName} ${doctor.lastName}`}
                </option>
              ))}
            </select>
            {errors.doctor && <span className="errors">{errors.doctor}</span>}
          </div>
          <div className="mb-2">
            <label className="block text-gray-600">Enter Notes</label>
            <input
              type="text"
              name="notes"
              onChange={handleChange}
              placeholder="Enter Notes if Any"
              className="w-full border-b-2 border-gray-400 roundme focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 block mx-auto roundmee text-center hover:bg-primary-700 focus:outline-none focus:shadow-outline-blue"
          >
            Book An Appointment
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Appointment;
