import React, { useState, useEffect } from "react";
import "./header.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";

function Header() {
  const [isShareAccessFormOpen, setShareAccessFormOpen] = useState(false);

  const handleShareAccessClick = () => {
    if (isShareAccessFormOpen) setShareAccessFormOpen(false);
    else {
      setShareAccessFormOpen(true);
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/patient/health-record/manage-access">Manage Access</Link>
          </li>
          <li>
            <Link to="/patient/health-record/view-report">View Reports</Link>
          </li>
          <li>
            <Button onClick={handleShareAccessClick}>Share Access</Button>
          </li>
        </ul>
      </nav>
      {isShareAccessFormOpen && (
        <ShareAccessForm onClose={() => setShareAccessFormOpen(false)} />
      )}
    </header>
  );
}

function ShareAccessForm({ onClose }) {
  const [formData, setFormData] = useState({
    selectedDoctor: "",
  });
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const [patients, setPatients] = useState([]);

  const patientData = () => {
    toast.success("Access shared successfully!", {
      autoClose: 6000,
    });
  };
  const errorData = () => {
    toast.warn("Error in sharing access !", {
      autoClose: 4000,
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/doctor/getDoctors")
      .then((response) => {
        setPatients(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }, []);

  const handleDoctorChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setSelectedDoctor(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { selectedDoctor } = formData;

    axios
      .post("http://localhost:8080/share-access", {
        doctorUsername: selectedDoctor,
      })
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        patientData();
        onClose();
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        errorData();
      });
  };

  return (
    <div className="share-access-form">
      <h4>Share PHR Access</h4>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Select Doctor Name</FormLabel>
          <Form.Select
            aria-label="Select Doctor"
            name="doctor"
            value={selectedDoctor}
            onChange={handleDoctorChange}
            required
          >
            <option value="">Select...</option>
            {patients.map((doctor) => (
              <option key={doctor.id} value={doctor.username}>
                {doctor.firstName} {doctor.lastName}
              </option>
            ))}
          </Form.Select>
        </FormGroup>
        <div className="buttons">
          <Button className="button1" type="submit">
            Share
          </Button>
          <Button className="button2" type="submit" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
}
export default Header;
