import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPatient } from "../Slice";
import Navbar from "./Navbar";

function Landing() {
  const entries = useSelector(state => state.appState);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPatient({id: entries.length + 1,name, address}));
    navigate('/entries');
  }

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl">Enter patient details</h1>
      <section className="flex flex-col items-center">
        
        <form onSubmit={handleSubmit} className="w-3/5 border-black border-2 rounded-lg p-4 m-2">
          <input className="w-full my-2 border-2 rounded-lg p-2" type="text" name="name" placeholder="Enter patient name here" value={name} onChange={
            e => setName(e.target.value) 
          } />

          <input className="w-full my-2 border-2 rounded-lg p-2" type="text" name="address" placeholder="Enter patient address" value={address} onChange={
            e => setAddress(e.target.value)
          } />

          <button type="submit" className="font-bold">Submit</button>
        </form>
      </section>
    </>
  )
}

export default Landing;