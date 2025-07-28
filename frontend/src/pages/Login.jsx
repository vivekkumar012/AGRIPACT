import React, { useState } from "react";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("/")
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className=" flex justify-center items-center">
      <div className="w-[400px] shadow bg-slate-500 border border-md ">
        <h1 className="text-2xl font-bold items-center">Login</h1>
        <p className="text-xl font-semibold mt-4">Login to see the content</p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="items-center">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-400 w-full text-white border-full focus:ring-none focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="items-center">Password</label>
            <input
              type="text"
              id="password"
              placeholder="Enter Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-400 w-full text-white border-full focus:ring-blue-400"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
