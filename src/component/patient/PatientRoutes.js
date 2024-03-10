import React from "react";
import { Route, Routes } from "react-router-dom";
import PatientRegistration from "./PatientRegister";
import Dashboard from "./Home/Dashboard";

function PatientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/patient-registration" element={<PatientRegistration />} />
    </Routes>
  );
}

export default PatientRoutes;
