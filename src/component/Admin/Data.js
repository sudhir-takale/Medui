import React from "react";
import { Col, Row, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./data.css";

function MainHome() {
  return (
    <div className="contain">
      <Row>
        <Col md={3}>
          <ListGroup>
            <Link
              to="/admin"
              className="list-group-item"
              style={{ color: "Navy", fontWeight: "bold", fontSize: "16px" }}
            >
              Dashboard
            </Link>
            <Link
              to="/admin/pending-request"
              className="list-group-item"
              style={{ color: "Navy", fontWeight: "bold", fontSize: "16px" }}
            >
              View Pending Requests
            </Link>

            <Link
              to="/admin/all-doctor"
              className="list-group-item"
              style={{ color: "Navy", fontWeight: "bold", fontSize: "16px" }}
            >
              View All Doctors
            </Link>

            <Link
              to="/admin/all-patient"
              className="list-group-item"
              style={{ color: "Navy", fontWeight: "bold", fontSize: "16px" }}
            >
              View All Patients
            </Link>
            <Link
              to="/admin/all-patient"
              className="list-group-item"
              style={{ color: "Navy", fontWeight: "bold", fontSize: "16px" }}
            >
              Log Out
            </Link>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default MainHome;
