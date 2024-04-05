import React from "react";
import "./appointmentlay.css";
import MainHome from "./MainHome";
// import ViewAllAppointment from "./AppointmentHeader";
import { Outlet } from "react-router-dom";

function AppointmentLayout() {
  return (
    <>
      <div className="appointment">
        <div className="firstbox">
          <MainHome />
        </div>
        <div className="secondbox">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AppointmentLayout;
