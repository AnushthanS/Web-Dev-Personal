import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function FormTextArea() {
  const [text, setTextarea] = useState(
    "Hello Students, Enter here some text"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={text} onChange={handleChange} />
    </form>
  )
}

export default FormTextArea