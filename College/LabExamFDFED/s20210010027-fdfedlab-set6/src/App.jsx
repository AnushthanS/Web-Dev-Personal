import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Entries from './components/Entries';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/entries' element={<Entries />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;