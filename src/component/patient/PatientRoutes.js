import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Home/Dashboard";
import ViewAllAppointment from "./PatientAppointment/ViewAllAppointment";
import MainHome from "./PatientAppointment/MainHome";
function PatientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/manage-appointment" element={<MainHome />} />
      <Route
        path="/patient/manage-appointment/appointments"
        element={<ViewAllAppointment />}
      />
      <Route path="*" element={<div>Not a right path</div>} />
    </Routes>
  );
}

export default PatientRoutes;
