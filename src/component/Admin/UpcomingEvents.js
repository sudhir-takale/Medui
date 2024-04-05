import React from "react";

function UpcomingEvents() {
  // Dummy data for demonstration
  const events = [
    { id: 1, event: "Appointment tomorrow at 10:00 AM" },
    { id: 2, event: "Medication refill due next week" },
    { id: 3, event: "Health checkup scheduled for next month" },
  ];

  return (
    <div className="stats-card">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((item) => (
          <li key={item.id}>{item.event}</li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingEvents;
