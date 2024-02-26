import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientRegistration from "./component/patient/Forms/PatientRegistration";
// import UpdateProfile from "./component/patient/Forms/UpdateProfile";
// import Slider from "./component/home/Slider";
// import Appointment from "./component/patient/Appointment";
// import Navb from "./component/patient/Navbar/Navb";
import Footer from "./component/patient/Footer";
import Home from "./component/home/Home";
import AboutUs from "./component/home/AboutUs";
import OurServices from "./component/home/OurServices";
import OurDoctors from "./component/home/OurDoctors";
import Blogs from "./component/home/Blogs";
import Faq from "./component/home/Faq";
import ContactUS from "./component/home/ContactUs";
import Brand from "./component/home/Brand";

import Slider from "./component/home/Slider";
import Login from "./component/auth/Login";
import Dashboard from "./component/patient/Home/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/patient" element={<Dashboard />} />
          <Route path="/patient" element={<Dashboard />} />
          <Route
            path="/patient-registration"
            element={<PatientRegistration />}
          />
        </Routes>
      </BrowserRouter>

      <div>
        <Slider />

        <AboutUs />
        <OurServices />
        <OurDoctors />
        <Blogs />
        <Brand />
        <Faq />
        <ContactUS />
        <Footer />
      </div>
    </div>
  );
}

export default App;
