import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import logo from '../assets/logo.png'

function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        {
          withCredentials: true,
        },
        {
          username: username,
          email: email,
          password: password,
        }
      );
      toast.success("Signup Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed, try again later");
    }
  };

  return (
    <div className="bg-gradient-to-r from-yellow-700 to-blue-800 h-screen">
      <div className="flex items-center justify-center mx-auto container h-screen text-white">
        {/* Header */}
        <div>
          <header className="flex justify-between items-center absolute top-0 left-0 w-full p-5">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="" className="h-10 w-10 rounded-full" />
              <Link to={"/"} className="text-2xl font-bold text-orange-500">
                AgriPact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to={"/login"}
                className="bg-transparent border border-gray-500 rounded-md py-2 px-4"
              >
                Signin
              </Link>
              <Link
                to={"/about"}
                className="bg-orange-500 rounded-md py-2 px-4"
              >
                More Info
              </Link>
            </div>
          </header>
        </div>
        <div className="w-[500px] shadow-lg bg-gray-600 rounded-lg p-8 mt-20">
          <h2 className="text-2xl font-bold text-center mb-4 text-orange-500">
            Sign Up{" "}
          </h2>
          <p className="text-xl font-semibold mb-4 text-center text-gray-400">
            Register for new User
          </p>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="ussername" className="text-gray-400">
                UserName
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter Your Username"
                required
                className="w-full bg-gray-700 border border-gray-800 p-3 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-400">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@gmail.com"
                required
                className="w-full bg-gray-700 border border-gray-800 p-3 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-gray-400">
                Password
              </label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
                required
                className="w-full bg-gray-700 border border-gray-800 p-3 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 w-full px-6 py-3 rounded-md hover:bg-blue-600"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
