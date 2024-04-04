// AdminDashboard.js
import React from "react";
import "./AdminDashboard.css"; // Import your CSS file for styling
import DoctorStats from "./DoctorStats";
import PatientStats from "./PatientStats";
import RecordStats from "./RecordStats";
import ActiveUsersStats from "./ActiveUsersStats";
import AppointmentStats from "./AppointmentStats";
import RecentActivities from "./RecentActivities";
import UpcomingEvents from "./UpcomingEvents";
import SystemHealth from "./SystemHealth";
import DataAnalytics from "./DataAnalytics";
import UserEngagement from "./UserEngagement";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="stats-section">
        <div className="stats-column">
          <DoctorStats />
          <PatientStats />
          <RecordStats />
          <ActiveUsersStats />
        </div>

        <div className="stats-column">
          <AppointmentStats />
          <RecentActivities />
          <UpcomingEvents />
          <SystemHealth />
        </div>

        <div className="stats-column">
          <DataAnalytics />
          <UserEngagement />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
