import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login'
import Signup from './pages/Signup';
import Chooser from './pages/Chooser';
import Footer from './pages/Footer';
import Guidelines from './pages/Guidelines';
import About from './pages/About';
import Account from './pages/Account';

function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<Layout />} /> 
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/chooser' element={<Chooser />} />
      <Route path='/guidelines' element={<Guidelines />} />
      <Route path='/about' element={<About />} />
      <Route path='/account' element={<Account />} />
     
    </Routes>
     <Toaster />
     </div>
  )
}

export default App
