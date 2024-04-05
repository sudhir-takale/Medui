import "./doctorregistration.css";

import { useState } from "react";
import { validateEmail } from "../../patient/Forms/utils";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function DoctorRegistration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isTouched: false,
  });

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [role, setRole] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [address, setAddress] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      username !== "" &&
      password.value.length >= 8 &&
      password.value === confirmPassword.value &&
      role !== "role" &&
      age !== "" &&
      gender !== "gender" &&
      mobile !== "" &&
      licenseNumber !== "" &&
      specialization !== "" &&
      address !== ""

    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setConfirmPassword({
      value: "",
      isTouched: false,
    });

    setAge("");

    setRole("role");
    setSpecialization("");
    setLicenseNumber("");
    setGender("");
    setMobileNumber("");
    setAddress("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const logged = () =>
      toast.success("Doctor Registered Successfully !", {
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

    // Prepare the data to send
    const formData = {
      firstName,
      lastName,
      email,
      username,
      password: password.value,
      confirmPassword: confirmPassword.value,
      licenseNumber,
      specialization,
      age,
      gender,
      mobile,
      role,
      address,
    };


    try {
      const res = await axios.post(
        "http://localhost:8080/doctor/doctorRegistration",
        formData
      );

      if (res.status === 200) {
        logged();
        window.location.href = "/login";
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
    <div className="App1">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2 id="sign-up">Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="Enter First name"
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Enter Last name"
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email address"
            />
          </div>

          <div className="Field">
            <label>
              Username <sup>*</sup>
            </label>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Enter Username"
            />
          </div>

          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Enter Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>

          <div className="Field">
            <label>
              Confirm Password <sup>*</sup>
            </label>
            <input
              value={confirmPassword.value}
              type="password"
              onChange={(e) => {
                setConfirmPassword({
                  ...confirmPassword,
                  value: e.target.value,
                });
              }}
              onBlur={() => {
                setConfirmPassword({ ...confirmPassword, isTouched: true });
              }}
              placeholder="Confirm Password"
            />
            {confirmPassword.isTouched &&
            confirmPassword.value.length < 8 &&
            confirmPassword.value !== password.value ? (
              <PasswordErrorMessage />
            ) : null}
          </div>

          {
            <div className="Field">
              <label>
                Mobile Number <sup>*</sup>
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
                placeholder="Enter Mobile Number"
              />
            </div>
          }

        <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="Role">Select Role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

            <div className="Field">
              <label>
                Specialization <sup>*</sup>
              </label>
              <input
                value={specialization}
                onChange={(e) => {
                  setSpecialization(e.target.value);
                }}
                placeholder="Enter your Specialization"
              />
            </div>

            <div className="Field">
              <label>
                License Number <sup>*</sup>
              </label>
              <input
                value={licenseNumber}
                onChange={(e) => {
                  setLicenseNumber(e.target.value);
                }}
                placeholder="Enter License Number"
              />
            </div>

            <div className="Field">
              <label>
                Age <sup>*</sup>
              </label>
              <input
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                placeholder="Enter Your Age"
              />
            </div>

          <div className="Field">
            <label>
              Gender <sup>*</sup>
            </label>
            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="gender">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

            <div className="Field">
              <label>
                Address <sup>*</sup>
              </label>
              <input
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder="Enter your Address"
              />
            </div>

          <button id="submit" type="submit" >
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default DoctorRegistration;
