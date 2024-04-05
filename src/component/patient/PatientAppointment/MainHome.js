import React, { useState } from "react";
import { Col, Row, ListGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AppointmentForm from "../Appointment";

function MainHome() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleNewAppointmentClick = () => {
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (formData) => {
    console.log(formData);
    setShowForm(false);
    navigate.goBack();
  };

  return (
    <>
      <div>
        <Row>
          <Col md={3}>
            <Button className="mb-3 ml-5" onClick={handleNewAppointmentClick}>
              Book A new Appointment
            </Button>
            <ListGroup>
              <Link
                to="/patient/manage-appointment/appointments"
                className="list-group-item"
              >
                All Appointments
              </Link>
              <Link
                to="/patient/manage-appointment/confirmed"
                className="list-group-item"
              >
                Confirmed Appointments
              </Link>

              <Link
                to="/patient/manage-appointment/pending"
                className="list-group-item"
              >
                Pending Appointments
              </Link>
              <Link
                to="/patient/manage-appointment/completed"
                className="list-group-item"
              >
                Past Appointment
              </Link>

              <Link
                to="/patient/manage-appointment/cancelled"
                className="list-group-item"
              >
                Rejected Appointments
              </Link>
            </ListGroup>
          </Col>
        </Row>
      </div>
      {showForm && (
        <AppointmentForm
          onCancel={handleCancelForm}
          onSubmit={handleFormSubmit}
        />
      )}
    </>
  );
}

export default MainHome;
