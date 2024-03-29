import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../Sidebar";
import sidebar_menu from "../../constants/sidebar-menu";
// import PedingRequest from "./PendingRequest";

function AdminRoutes() {
  return (
    <div className="dashboard-container">
      <SideBar menu={sidebar_menu} />
      <div className="dashboard-body">
        <Routes>
          <Route path="/" element={<div>All are</div>} />
          <Route path="/locations" element={<div></div>} />
          <Route path="/profile" element={<div>how </div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminRoutes;
