import "../App.css"

function OrderList({ orders }) {
    return (
        <div className="w-1/2 border-2 border-blue-400 rounded-lg mx-auto my-4 p-2 text-center">
            <h2 className="font-bold text-xl mb-2">Order List</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>Id:{order.id},  Destination: {order.destination}</li>
                ))}
            </ul>
        </div>
    );
}
export default OrderList;