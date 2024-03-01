import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Demo from "./Demo";
// import SideBar from "./component/Sidebar";
// import sidebar_menu from "./constants/sidebar-menu";

import "./App.css";
import Dashboard from "./component/patient/Home/Dashboard";
// import Appointment from "./component/patient/Appointment";
// import Orders from "./pages/Orders";

// import ShowRecord from "./component/patient/HealthRecord/ShowRecord";

function App() {
  return (
    <Dashboard />
    // <Demo />
    // This is admin router
    // <Router>
    //   <div className="dashboard-container">
    //     <SideBar menu={sidebar_menu} />

    //     <div className="dashboard-body">
    //       <Routes>
    //         <Route path="*" element={<div></div>} />
    //         <Route exact path="/" element={<div></div>} />
    //         <Route exact path="/orders" element={<Orders />} />
    //         <Route exact path="/locations" element={<div></div>} />
    //         <Route
    //           exact
    //           path="/profile"
    //           element={<div>how are you todua</div>}
    //         />
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
