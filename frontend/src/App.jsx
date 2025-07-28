
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />} /> 
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
