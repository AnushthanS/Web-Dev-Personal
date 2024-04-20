import React, { useState } from "react";

function OrderForm({ onSubmit }) {
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ destination });
    setDestination("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Order</h2>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button type="submit">Submit Order</button>
    </form>
  );
}

export default OrderForm;
