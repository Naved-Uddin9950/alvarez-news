import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='bg-gray-950 w-full h-screen text-white'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
