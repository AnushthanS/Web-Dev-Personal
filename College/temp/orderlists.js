import React from "react";

function OrderList({ orders }) {
  return (
    <>
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>Destination: {order.destination}</li>
        ))}
      </ul>
    </>
  );
}

export default OrderList;
