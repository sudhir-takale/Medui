import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import PatientRoutes from "./component/patient/PatientRoutes";
import AdminRoutes from "./component/Admin/AdminRoutes";
import Login from "./component/auth/Login";
import PatientRegistration from "./component/patient/Forms/PatientRegistration";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/patient" element={<PatientRoutes />} />
          <Route
            path="/patient-registration"
            element={<PatientRegistration />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
