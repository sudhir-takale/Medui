import "./registration.css";
import { useState } from "react";
import { validateEmail } from "./utils";
import axios from "axios";
import Baseurl from "../../../api/Baseurl";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function PatientRegistration() {

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

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      username !== "" &&
      password.value.length >= 8 &&
      password.value === confirmPassword.value &&
      dob !== "" &&
      gender !== "gender" &&
      mobileNumber !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      username,
      password: password.value,
      confirmPassword: confirmPassword.value,
      dob,
      gender,
      mobileNumber,
    };

    try {
      const res = await axios.post(
        `${Baseurl()}/patient-registration`,
        formData
      );
      console.log(res);
      console.log(res.data);
    } catch (error) {
      console.error("Error occurred while submitting the form:", error);
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

          <button id="submit" type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default PatientRegistration;
