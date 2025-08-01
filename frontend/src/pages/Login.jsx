import React, { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [redirect, setRedirect] = useState(false);
  const role = localStorage.getItem('role');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3001/login", {
          withCredentials: true,
        }, {
          email,
          password
        })
        toast.success("Login Successfull");
        setRedirect(true);

    } catch (error) {
        console.log(error);
        toast.error("Login failed");
    }
  }

  if(redirect) {
    if(role == 'farmer') {
      return <Navigate to={"/account"} />
    } else {
      return <Navigate to={"/vendor"} />
    }
  }

  return (
    <div className='bg-gradient-to-r from-yellow-700 to-blue-800 h-screen'>
      <div className='items-center flex justify-center h-screen text-white container mx-auto'>
        {/* Header */}
        <header className='absolute top-0 left-0 w-full flex items-center justify-between p-5'>
          <div className='flex items-center space-x-2'>
            <img src='' alt="" className='h-10 w-10 rounded-full'/>
            <Link to={"/"} className='text-2xl font-bold text-orange-500'>Agripact</Link>
          </div>
          <div className='flex items-center space-x-4'>
              <Link to={"/register"} className='bg-transparent border border-gray-500 rounded-md py-2 px-4'>Signup</Link>
              <Link to={"/about"} className='bg-orange-500 rounded-md py-2 px-4'>More Info</Link>
          </div>
        </header>

        {/* Login Form */}
        <div className='bg-gray-600 w-[500px] rounded-lg shadow-lg p-8 mt-20'>
          <h2 className='text-2xl font-bold text-center mb-4'>
            Welcome to <span className='text-orange-500'>AgriPact</span>
          </h2>
          <p className='text-center text-gray-400 mb-6'>Login to access the website</p>

          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor="email" className='text-gray-400 mb-2'>Email</label>
              <input 
                type="text" 
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='name@gmail.com'
                required
                className='w-full p-3 rounded-md bg-gray-700 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="password" className='text-gray-400 mb-2'>Password</label>
              <input 
                type="text" 
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='******'
                required
                className='w-full rounded-md bg-gray-700 border border-gray-700 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            {/* {errorMessage && (
              <div className="mb-4 text-red-500 text-center">
                {errorMessage}
              </div>
            )} */}

            <button type='submit' className='w-full bg-orange-500 py-3 px-6 hover:bg-blue-600 text-white rounded-md transition'>
                 Signin
            </button>   
        </form>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
