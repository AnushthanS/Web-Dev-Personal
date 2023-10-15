import { useState } from 'react'
import './App.css'
import OrderSubmitForm from './components/OrderForm';
import OrderList from './components/OrderList';
import OrderTrackForm from './components/OrderTrack';

function App() {
    const [orders, setOrders] = useState([]);

    const handleOrderSubmit = (order) => {
      setOrders([...orders, {id: orders.length + 1, ...order}])
    }

    const handleTrackingSubmit = (input) => {
      
    }
    return(
      <>
        <section className="text-center bg-blue-500 p-[20px]">
          <h1 className='text-4xl text-white m-2'>Courier Delivery</h1>
          <p className='m2 text-white'>Check status or create a new shipment!</p>
        </section>
        
        <OrderSubmitForm onSubmit={handleOrderSubmit} />
        <OrderList orders={orders} />

        {/* <OrderTrackForm onSubmit={handleTrackingSubmit} /> */}
      </>
  );
}

export default App