import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Display from './Display';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
