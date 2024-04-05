import React from "react";
import "./admin.css";
import MainHome from "./Data";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="containes">
      <h1 className="heading" >WelCome to The Admin Dashboard</h1>
      <div className="appointment">
        <div className="firstbox">
          <MainHome />
        </div>
        <div className="secondbox">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
