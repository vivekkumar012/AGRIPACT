import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login'
import Signup from './pages/Signup';

function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<Layout />} /> 
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
     
    </Routes>
     <Toaster />
     </div>
  )
}

export default App
