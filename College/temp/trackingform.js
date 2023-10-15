import React, { useState } from "react";

function TrackingForm({ onSubmit }) {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(trackingNumber);
    setTrackingNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Track Order</h2>
      <input className=""
        type="text"
        placeholder="Enter Tracking Number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      <button type="submit">Track</button>
    </form>
  );
}

export default TrackingForm;
