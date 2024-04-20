import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function SubmitForm() {
  const [name, setName] = useState("Chandra");

  const handleSubmit = () => {
    //event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
export default SubmitForm