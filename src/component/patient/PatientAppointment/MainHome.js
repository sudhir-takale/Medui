import React from "react";
import { Col, Row, ListGroup, Container } from "react-bootstrap";
import { Link, Routes, Route } from "react-router-dom";
import ViewAllAppointment from "./ViewAllAppointment";
import Confirmed from "./Confirmed";
import Pending from "./Pending";
function MainHome() {
  return (
    <>
      <div>
        <h3>
          Welcome to Patient Appointment Manager
        </h3>
        <Container>
          <Row>
            <Col md={3}>
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
                  to="/patient/manage-appointment/cancelled"
                  className="list-group-item"
                >
                  Cancelled Appointments
                </Link>
              </ListGroup>
            </Col>

            <Col md={8}>
              <ViewAllAppointment />

              <Routes>
                <Route
                  path="/patient/manage-appointment/appointments"
                  element={<ViewAllAppointment />}
                  exact
                />
                <Route
                  path="/patient/manage-appointment/confirmed"
                  element={<Confirmed />}
                  exact
                />
                <Route
                  path="/patient/manage-appointment/pending"
                  element={<Pending />}
                  exact
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MainHome;
