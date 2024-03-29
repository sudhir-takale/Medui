import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import PatientRoutes from "./component/patient/PatientRoutes";
import AdminRoutes from "./component/Admin/AdminRoutes";
import Login from "./component/auth/Login";
import PatientRegistration from "./component/patient/Forms/PatientRegistration";
import Dashboard from "./component/patient/Home/Dashboard";
import Doctor_Dashboard from "./component/doctor/dashboard/Doctor_Dashboard";
import AppointmentStats from "./component/doctor/AppointmentStats/AppointmentStats";
import AppointmentMgmt from "./component/doctor/AppointmentManagement/AppointmentMgmt";
import PatientHistory from "./component/doctor/PatientHistory/PatientHistory";
import PatientList from "./component/doctor/PatientList/PatientList";
import DoctorRegistration from "./component/doctor/Registration/DoctorRegistration";
import UpdatePHR from "./component/doctor/UpdatePHR/UpdatePHR";
// import ShowRecord from "./component/patient/HealthRecord/ShowRecord";
import AccessPhr from "./component/patient/HealthRecord/AccessPhr";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          {/* <Route path="/" element={<Dashboard />}  /> */}
          <Route path="/" element={<Doctor_Dashboard />} />

          {/* <Route path="/" element={<AccessPhr/>}/> */}
          {/* <Route path="/" element={<ShowRecord />} /> */}
          

          {/* <Route path="/" element={<AppointmentMgmt />} /> */}
          {/* <Route path="/" element={<AppointmentStats/>} /> */}

          
          {/* <Route path="/" element={<PatientHistory/>} /> */}
          {/* <Route path="/" element={<PatientList/>} /> */}
          {/* <Route path="/" element={<DoctorRegistration/>} /> */}

          <Route path="/Doctor_Dashboard" element={<Doctor_Dashboard />} />
          <Route path="/DoctorRegistration" element={<DoctorRegistration />} />
          <Route path="/AppointmentStats" element={<AppointmentStats/>} />
          <Route path="/AppointmentMgmt" element={<AppointmentMgmt/>} />
          <Route path="/PatientHistory" element={<PatientHistory/>} />
          <Route path="/PatientList" element={<PatientList />} />
          <Route path="UpdatePHR" element={<UpdatePHR />}/>

          <Route path="/patient" element={<PatientRoutes />} />
          <Route path="/patient-registration" element={<PatientRegistration />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
