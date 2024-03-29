import "./doctorregistration.css";

import { useState } from "react";
import { validateEmail } from "../../patient/Forms/utils";

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

  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [role, setRole] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [address, setAddress] = useState("");
  const [licensenumber, setLicenseNumber] = useState("");

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      username !== "" &&
      password.value.length >= 8 &&
      password.value === confirmPassword.value &&
      role !== "role" &&
      dob !== "" &&
      gender !== "gender" &&
      mobileNumber !== "" &&
      licensenumber !== "" &&
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

    setDob("");

    setRole("role");
    setSpecialization("");
    setLicenseNumber("");
    setGender("");
    setMobileNumber("");
    setAddress("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const formData = {
      firstName,
      lastName,
      email,
      username,
      password: password.value,
      confirmPassword: confirmPassword.value,
      licensenumber,
      specialization,
      dob,
      gender,
      mobileNumber,
      role,
    };

    try {
      const response = await fetch("http://localhost:3000/processing-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data.");
      }

      alert("Account created!");
      clearForm();

      // Redirect to the home page
      window.location.href = "/home";
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to submit form data. Please try again later.");
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
                value={mobileNumber}
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
                value={licensenumber}
                onChange={(e) => {
                  setLicenseNumber(e.target.value);
                }}
                placeholder="Enter License Number"
              />
            </div>

          <div className="Field">
            <label>
              Date of Birth <sup>*</sup>
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
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

          <button id="submit" type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default DoctorRegistration;
