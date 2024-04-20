import { useState } from "react";
import "../App.css"

function OrderSubmitForm({onSubmit}){
    const [destination, setDestination] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmit({destination});
        setDestination("");
    }
    return (
        <>
            <form className="mx-auto mt-4 border-2 border-blue-400 flex flex-col items-center  pt-4 rounded-lg w-1/2 flex-shrink" onSubmit={submitHandler}>

                <h2 className="text-3xl text-center my-3">Create a new shipment</h2>

                <input className="w-1/2 border-2 border-blue-300 text-lg rounded-xl text-center my-4 p-2"
                type="text" 
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                />
                <button type="submit" className="w-1/4 border-2 border-blue-400 bg-blue-400 p-2 mb-3 rounded-lg hover:opacity-50 text-white">Enter</button>
            </form>
        </>
    );
}

export default OrderSubmitForm;