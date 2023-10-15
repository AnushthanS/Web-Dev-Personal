import React from "react";

function TrackingResults({ data, result }) {
  return (
    <div>
      <h2>Tracking Results</h2>
      <p>Status: {result}</p>
      {result === "In transit" && <p>Location: {data.location}</p>}
    </div>
  );
}

export default TrackingResults;
