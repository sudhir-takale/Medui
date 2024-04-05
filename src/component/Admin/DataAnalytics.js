import React from "react";

function DataAnalytics() {
  // Dummy data for demonstration
  const analyticsData = {
    topConditions: ["Hypertension", "Diabetes", "Asthma"],
    averageAge: 35,
    genderDistribution: { male: 60, female: 40 },
  };

  return (
    <div className="stats-card">
      <h2>Data Analytics</h2>
      <p>Top Conditions: {analyticsData.topConditions.join(", ")}</p>
      <p>Average Age: {analyticsData.averageAge}</p>
      <p>
        Gender Distribution: Male - {analyticsData.genderDistribution.male}%,
        Female - {analyticsData.genderDistribution.female}%
      </p>
    </div>
  );
}

export default DataAnalytics;
