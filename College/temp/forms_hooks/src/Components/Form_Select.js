import { useState } from "react";
import ReactDOM from "react-dom/client";

function FormSelect() {
  const [myCar, setMyCar] = useState("Choose");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
    <label>Select a Car</label>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

export default FormSelect