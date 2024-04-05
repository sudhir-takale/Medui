import React from "react";
import { Col, Row, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainHome() {
  return (
    <>
      <div>
        <Row>
          <Col md={3}>
            <ListGroup>
              <Link to="/admin" className="list-group-item">
                Dashboard
              </Link>
              <Link to="/admin/pending-request" className="list-group-item">
                View Pending Requests
              </Link>

              <Link to="/admin/all-doctor" className="list-group-item">
                View All Doctors
              </Link>

              <Link to="/admin/all-patient" className="list-group-item">
                View All Patients
              </Link>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default MainHome;
