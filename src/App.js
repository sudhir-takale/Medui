import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import PatientRoutes from "./component/patient/PatientRoutes";
import AdminRoutes from "./component/Admin/AdminRoutes";
import Login from "./component/auth/Login";
import PatientRegistration from "./component/patient/Forms/PatientRegistration";
// import ViewAllAppointment from "./component/patient/PatientAppointment/ViewAllAppointment";
import MainHome from "./component/patient/PatientAppointment/MainHome";
// import ViewAllAppointment from "./component/patient/PatientAppointment/ViewAllAppointment";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/patient" element={<PatientRoutes />} />
          <Route
            path="/patient/manage-appointment"
            element={<MainHome />}
          />
         
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
