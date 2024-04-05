import React from "react";

function RecentActivities() {
  // Dummy data for demonstration
  const activities = [
    { id: 1, activity: "Record modified by Dr. Smith" },
    { id: 2, activity: "New patient registered" },
    { id: 3, activity: "Appointment scheduled for tomorrow" },
  ];

  return (
    <div className="stats-card">
      <h2>Recent Activities</h2>
      <ul>
        {activities.map((item) => (
          <li key={item.id}>{item.activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivities;
