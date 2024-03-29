import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Dashboard from "./component/patient/Home/Dashboard";
import Appointment from "./component/patient/PatientAppointment/MainHome";
import Registration from "./component/patient/Forms/PatientRegistration";
import AdminRoutes from "./component/Admin/AdminRoutes";
import Login from "./component/auth/Login";
import ShowRecord from "./component/patient/HealthRecord/ShowRecord";

function App() {
  return (
    <Router>
      <Routes>
        {/* admin */}

        <Route path="/admin" element={<AdminRoutes />} />

        <Route path="/" element={<Home />} />
        {/* Login and Registration */}

        <Route path="/patient-registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />

        {/* Patient Rotes */}
        <Route path="/patient" element={<Dashboard />} />
        <Route path="/patient/manage-appointment" element={<Appointment />} />
        <Route path="/patient/telehealth" element={<Appointment />} />
        <Route path="/patient/health-record" element={<ShowRecord />} />
        <Route path="/patient/view-history" element={<Appointment />} />
        <Route path="/patient/profile" element={<Appointment />} />
        <Route path="/patient/setting" element={<Appointment />} />
        <Route path="/patient/notification" element={<Appointment />} />

        {/* Doctor Routes */}
      </Routes>
    </Router>
  );
}

export default App;
