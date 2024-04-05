import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function PHRLayout() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
    </>
  );
}

export default PHRLayout;
