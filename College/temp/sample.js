import React, { useState, useEffect } from "react";
import OrderForm from "./OrderForm";
// import TrackingForm from "./TrackingForm";
import OrderList from "./OrderList";
// import TrackingResults from "./TrackingResults";

function App() {
  const [orders, setOrders] = useState([]);
  const [trackingData, setTrackingData] = useState({});
  const [trackingResult, setTrackingResult] = useState(null);

  useEffect(() => {
    // Simulate fetching order data from an API
    fetchOrdersFromAPI().then((data) => setOrders(data));
  }, []);

  const fetchOrdersFromAPI = async () => {
    // Simulate an API request to get order data
    return [
      { id: 1, destination: "Address 1" },
      { id: 2, destination: "Address 2" },
      { id: 3, destination: "Address 3" },
    ];
  };

  const handleOrderSubmit = (order) => {
    // Simulate adding a new order
    setOrders([...orders, { id: orders.length + 1, ...order }]);
  };

  const handleTrackingSubmit = (trackingNumber) => {
    // Simulate fetching tracking data from an API
    fetchTrackingDataFromAPI(trackingNumber).then((data) => {
      setTrackingData(data);
      setTrackingResult("In transit");
    });
  };

  const fetchTrackingDataFromAPI = async (trackingNumber) => {
    // Simulate an API request to get tracking data
    return { status: "In transit", location: "Facility 1" };
  };

  return (
    <div>
      <h1>Courier Delivery App</h1>
      <OrderForm onSubmit={handleOrderSubmit} />
      <TrackingForm onSubmit={handleTrackingSubmit} />
      <OrderList orders={orders} />
      <TrackingResults data={trackingData} result={trackingResult} />
    </div>
  );
}

export default App;
