import { useSelector, useDispatch } from "react-redux"
import Navbar from "./Navbar";
import { removePatient } from "../Slice";
import { useState } from "react";

function Entries() {
    const entries = useSelector(state => state.appState);
    console.log(entries);
    
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
      dispatch(removePatient({name}));
    }
  return (
    <>
        <Navbar />

        <section className="flex flex-col items-center w-3/5 mx-auto">
          <h1 className="text-4xl my-4">Patient Details</h1>
          <div className="border-2 border-black rounded-lg w-full p-4">
            {entries.map((entry, index) => (
              <div key={index} className="my-4">
                <p className="font-thin">entry</p>
                <h2 className="span">{entry.name}</h2>
                <p>{entry.address}</p>
              </div>
            ))}
          </div>
          
          <form className="flex flex-col items-center border-2 border-black rounded-lg p-4 my-4 w-full" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="delete entry with name" value={name} onChange={e => setName(e.target.value)}/>
            <button type="submit" className="font-bold">Delete</button>
          </form>
        </section>
    </>
  )
}

export default Entries