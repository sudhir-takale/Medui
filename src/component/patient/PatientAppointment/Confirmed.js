import React from 'react'

function Confirmed() {
  return (
    <div>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Reason</th>
            <th>Notes</th>
          </tr>
        </thead>
        {/* <tbody> */}
          {/* {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.notes}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}

export default Confirmed