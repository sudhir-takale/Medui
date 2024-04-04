import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Dashboard from "./component/patient/Home/Dashboard";
import ShowRecord from "./component/patient/HealthRecord/ShowRecord";

import Appointment from "./component/patient/PatientAppointment/MainHome";
import Registration from "./component/patient/Forms/PatientRegistration";
import Login from "./component/auth/Login";
import AppointmentStats from "./component/doctor/AppointmentStats/AppointmentStats";
import AppointmentMgmt from "./component/doctor/AppointmentManagement/AppointmentMgmt";
import PatientHistory from "./component/doctor/PatientHistory/PatientHistory";
// import PatientList from "./component/doctor/PatientList/PatientList";
import PatientList from "./component/Admin/PatientList";
import DoctorRegistration from "./component/doctor/Registration/DoctorRegistration";
import UpdatePHR from "./component/doctor/UpdatePHR/UpdatePHR";
import AppointmentLayout from "./component/patient/PatientAppointment/AppointmentLayout";
import ViewAllAppointment from "./component/patient/PatientAppointment/ViewAllAppointment";
import AdminLayout from "./component/Admin/AdminLayout";
import AdminDashboard from "./component/Admin/AdminDashboard";
import PendingRequest from "./component/Admin/PendingRequest";
import DoctorList from "./component/Admin/DoctorList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/" element={<AdminDashboard />} />
            <Route path="/admin/all-doctor" element={<DoctorList />} />
            <Route path="/admin/all-patient" element={<PatientList />} />
            <Route path="/admin/pending-request" element={<PendingRequest />} />
          </Route>

          <Route path="/" element={<Home />} />
          {/* Login and Registration */}

          <Route path="/patient-registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />

          {/* Patient Rotes */}

          <Route path="/patient" element={<Dashboard />} />
          <Route
            path="/patient/manage-appointment"
            element={<AppointmentLayout />}
          >
            <Route
              path="/patient/manage-appointment/appointments"
              element={<ViewAllAppointment />}
            />
            <Route
              path="/patient/manage-appointment/confirmed"
              element={<div>Hii iam confirm</div>}
            />
            <Route
              path="/patient/manage-appointment/pending"
              element={<div>Hii iam pending</div>}
            />
            <Route
              path="/patient/manage-appointment/cancelled"
              element={<div>Hii iam cancelled</div>}
            />
          </Route>
          <Route path="/patient/telehealth" element={<Appointment />} />
          <Route path="/patient/health-record" element={<ShowRecord />} />
          <Route path="/patient/view-history" element={<Appointment />} />
          <Route path="/patient/profile" element={<Appointment />} />
          <Route path="/patient/setting" element={<Appointment />} />
          <Route path="/patient/notification" element={<Appointment />} />

          {/* Doctor Routes  */}
          {/* <Route path="/doctor/dashboard" element={<Doctor_Dashboard />} /> */}
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
