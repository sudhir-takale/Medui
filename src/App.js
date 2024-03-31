import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Dashboard from "./component/patient/Home/Dashboard";
import ShowRecord from "./component/patient/HealthRecord/ShowRecord";

import Appointment from "./component/patient/PatientAppointment/MainHome";
import Confirmed from "./component/patient/PatientAppointment/Confirmed";

import Pending from "./component/patient/PatientAppointment/Pending";

import PatientRegister from "./component/patient/Forms/PatientRegistration";
import AdminRoutes from "./component/Admin/AdminRoutes";
import Login from "./component/auth/Login";
import PatientRegistration from "./component/patient/Forms/PatientRegistration";
import Doctor_Dashboard from "./component/doctor/dashboard/Doctor_Dashboard";
import AppointmentStats from "./component/doctor/AppointmentStats/AppointmentStats";
import AppointmentMgmt from "./component/doctor/AppointmentManagement/AppointmentMgmt";
import PatientHistory from "./component/doctor/PatientHistory/PatientHistory";
import PatientList from "./component/doctor/PatientList/PatientList";
import DoctorRegistration from "./component/doctor/Registration/DoctorRegistration";
import UpdatePHR from "./component/doctor/UpdatePHR/UpdatePHR";
import AccessPhr from "./component/patient/HealthRecord/AccessPhr";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Doctor Routes  */}
          <Route path="/doctor/dashboard" element={<Doctor_Dashboard />} />
          <Route path="/doctor-registration" element={<DoctorRegistration />} />
          <Route
            path="/doctor/appointment-stats"
            element={<AppointmentStats />}
          />
          <Route
            path="/doctor/appointment-mgmt"
            element={<AppointmentMgmt />}
          />
          <Route path="/doctor/patient-history" element={<PatientHistory />} />
          <Route path="/doctor/patient-list" element={<PatientList />} />
          <Route path="/doctor/update-phr" element={<UpdatePHR />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
