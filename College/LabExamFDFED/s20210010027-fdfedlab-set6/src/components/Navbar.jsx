import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='h-[60px] py-4 px-2 bg-black text-white text-bold flex justify-between items-center'>
        <Link to="/">Patient Form</Link>
        <Link to="/entries">Entries</Link>
    </div>
  )
}

export default Navbar;