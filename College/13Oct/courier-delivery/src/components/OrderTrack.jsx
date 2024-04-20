import "../App.css"

function OrderTrackForm({onSubmit}){
    const [trackingNumber, setTrackingNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(trackingNumber);
    setTrackingNumber("");
  };

  return (
    <form className="mx-auto mt-4 border-2 border-blue-400 flex flex-col items-center  pt-4 rounded-lg w-1/2 flex-shrink"
    onSubmit={handleSubmit}>
      <h2>Track Order</h2>
      <input
        type="text"
        placeholder="Enter Tracking Number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      <button type="submit">Track</button>
    </form>
  );
}

export default OrderTrackForm;