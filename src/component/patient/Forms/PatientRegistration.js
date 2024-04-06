import "./registration.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";

function PatientRegistration() {
  const [patientName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNo, setMobileNumber] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const logged = () =>
      toast.success("Patient Registered Successfully !", {
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

    const warning = () =>
      toast.warn("Username already taken !", {
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

    const formData = {
      patientName,
      address,
      email,
      username,
      password,
      confirmPassword,
      dob,
      gender,
      phoneNo,
      bloodGroup,
      age,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/patient/register",
        formData
      );

      if (res.status === 200) {
        logged();
        window.location.href = "/patient";
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        warning();
      } else {
        console.error("Error occurred while submitting the form:", error);
      }
    }
  };

  return (
    <div className="registration-form-container">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2 id="sign-up">Sign Up</h2>
          <div className="form-field-group">
            <label className="form-label">
              First name <sup>*</sup>
            </label>
            <input
              value={patientName}
              name="patientName"
              onChange={(e) => setFirstName(e.target.value)}
              className="form-input"
              placeholder="Enter First name"
            />
          </div>
          <div className="form-field-group">
            <label className="form-label">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-input"
              placeholder="Enter Address"
            />
          </div>
          <div className="form-field-group">
            <label className="form-label">
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Enter Email address"
            />
          </div>
          <div className="form-field-group">
            <label className="form-label">
              Username <sup>*</sup>
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-field-group">
            <label className="form-label">
              Password <sup>*</sup>
            </label>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-field-group">
            <label className="form-label">
              Confirm Password <sup>*</sup>
            </label>
            <input
              value={confirmPassword}
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-field-group">
            <label className="form-label">
              Mobile Number <sup>*</sup>
            </label>
            <input
              type="tel"
              value={phoneNo}
              name="phoneNo"
              onChange={(e) => setMobileNumber(e.target.value)}
              className="form-input"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="form-field-group">
            <label className="form-label">
              Date of Birth <sup>*</sup>
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-field-group">
            <label className="form-label">
              Gender <sup>*</sup>
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="form-input"
            >
              <option value="gender">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-field-group">
            <label className="form-label">Blood Group</label>
            <input
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              className="form-input"
              placeholder="Enter Blood Group"
            />
          </div>
          <div className="form-field-group">
            <label className="form-label">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-input"
              placeholder="Enter Age"
            />
          </div>
          <button className="submit-button" type="submit">
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default PatientRegistration;
