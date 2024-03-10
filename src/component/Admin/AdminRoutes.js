import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SideBar from "../Sidebar";
import sidebar_menu from "../../constants/sidebar-menu";
import PedingRequest from "./PendingRequest";

function AdminRoutes() {
  return (
    <BrowserRouter>
      <Router>
        <div className="dashboard-container">
          <SideBar menu={sidebar_menu} />
          <div className="dashboard-body">
            <Routes>
              <Route exact path="/" element={PedingRequest} />
              <Route exact path="/locations" element={<div></div>} />
              <Route
                exact
                path="/profile"
                element={<div>how are you todua</div>}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default AdminRoutes;
