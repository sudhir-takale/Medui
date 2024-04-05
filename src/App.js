import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Dashboard from "./component/patient/Home/Dashboard";

import Appointment from "./component/patient/PatientAppointment/MainHome";
import Registration from "./component/patient/Forms/PatientRegistration";
import Login from "./component/auth/Login";
import AppointmentStats from "./component/doctor/AppointmentStats/AppointmentStats";
import AppointmentMgmt from "./component/doctor/AppointmentManagement/AppointmentMgmt";
import PatientHistory from "./component/doctor/PatientHistory/PatientHistory";

import PatientList1 from "./component/Admin/PatientList";
import PatientList from "./component/doctor/PatientList/PatientList";


import DoctorRegistration from "./component/doctor/Registration/DoctorRegistration";
import UpdatePHR from "./component/doctor/UpdatePHR/UpdatePHR";
import AppointmentLayout from "./component/patient/PatientAppointment/AppointmentLayout";
import ViewAllAppointment from "./component/patient/PatientAppointment/ViewAllAppointment";
import AdminLayout from "./component/Admin/AdminLayout";
import AdminDashboard from "./component/Admin/AdminDashboard";
import PendingRequest from "./component/Admin/PendingRequest";
import DoctorList from "./component/Admin/DoctorList";

import Confirmed from "./component/patient/PatientAppointment/Confirmed";
import Pending from "./component/patient/PatientAppointment/Pending";
import Rejected from "./component/patient/PatientAppointment/Rejected";
import Completed from "./component/patient/PatientAppointment/Completed";
import PHRLayout from "./component/patient/HealthRecord/PHRLayout";
import ShowRecord from "./component/patient/HealthRecord/ShowRecord";
import AccessPhr from "./component/patient/HealthRecord/AccessPhr";
import Doctor_Dashboard from "./component/doctor/dashboard/Doctor_Dashboard";

import Profile from "./component/doctor/Profile/Profile";
import UpdateProfile from "./component/doctor/UpdateProfile/UpdateProfile";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/" element={<AdminDashboard />} />
            <Route path="/admin/all-doctor" element={<DoctorList />} />
            <Route path="/admin/all-patient" element={<PatientList1 />} />
            <Route path="/admin/pending-request" element={<PendingRequest />} />
          </Route>

          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Doctor_Dashboard />} /> */}
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
              element={<Confirmed />}
            />
            <Route
              path="/patient/manage-appointment/pending"
              element={<Pending />}
            />
            <Route
              path="/patient/manage-appointment/cancelled"
              element={<Rejected />}
            />
            <Route
              path="/patient/manage-appointment/completed"
              element={<Completed />}
            />
          </Route>
          {/* ------------------------------------------------------------------- */}
          {/* Patient Health record */}
          <Route path="/patient/health-record" element={<PHRLayout />}>
            <Route
              path="/patient/health-record/manage-access"
              element={<AccessPhr />}
            />

            <Route
              path="/patient/health-record/view-report"
              element={<ShowRecord />}
            />
            {/* <Route path="/patient/health-record/" element={<Header />} /> */}
          </Route>
          {/* ------------------------------------------------------------------- */}
          <Route path="/patient/telehealth" element={<Appointment />} />
          <Route path="/patient/view-history" element={<Appointment />} />
          <Route path="/patient/profile" element={<Appointment />} />
          <Route path="/patient/setting" element={<Appointment />} />
          <Route path="/patient/notification" element={<Appointment />} />

          {/* Doctor Routes  */}
          <Route path="/doctor" element={<Doctor_Dashboard />} />

          <Route path="/doctor/profile" element={<Profile />} />
          <Route path="/doctor/update-profile" element={<UpdateProfile />} />

          <Route path="/doctor-registration" element={<DoctorRegistration />} />
          <Route path="/doctor/appointment-stats" element={<AppointmentStats />} />
          <Route path="/doctor/appointment-mgmt" element={<AppointmentMgmt />} />
          <Route path="/doctor/patient-history" element={<PatientHistory />} />
          <Route path="/doctor/patient-list" element={<PatientList />} />
          <Route path="/doctor/update-phr" element={<UpdatePHR />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
