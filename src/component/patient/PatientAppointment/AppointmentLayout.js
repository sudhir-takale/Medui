import React from "react";
import "./appointmentlay.css";
import MainHome from "./MainHome";
import ViewAllAppointment from "./ViewAllAppointment";
import { Outlet } from "react-router-dom";

function AppointmentLayout() {
  return (
    <>
      <div className="appointment">
        <div className="firstbox">
          <MainHome />
        </div>
        <div className="secondbox">
          <ViewAllAppointment />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AppointmentLayout;
