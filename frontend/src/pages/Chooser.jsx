import React from "react";
import farmer from "../assets/farmer.svg";
import vendor from "../assets/vendor.png";
import { Link } from "react-router-dom";

function Chooser() {
  return (
    <div className="bg-gradient-to-r from-yellow-600 to-blue-800 min-h-screen">
      <h1 className="text-4xl text-center font-bold">Choose Your Login Role</h1>
      <div className="flex justify-between items-center h-screen ml-50">
        <div className="rounded-md h-80 p-6 mx-4 my-4 mb-20 w-70 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-teal-200 border-double border-2 bg-blue-400">
          <img src={farmer} alt="" />
          <h2 className="font-semibold text-xl text-teal-800 mb-4">I'm a Farmer</h2>
          <p className="text-gray-600 mb-4 ">
            Are you looking for services or products? Click below to start
            browsing.
          </p>
          <Link
            to={"/login"}
            className="bg-teal-800 hover:bg-teal-600 text-white font-semibold items-center py-2 px-4 rounded focus:outline-none focus:ring focus:ring-teal-300 transition-colors mt-12"
          >
            Login
          </Link>
        </div>

        <div className="rounded-md h-80 p-6 mx-4 my-4 mb-20 w-70 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-teal-200 border-double border-2 bg-blue-400 mr-50">
          <img src={vendor} alt="" />
          <h2 className="font-semibold text-xl text-teal-800 mb-4">I'm a Vendor</h2>
          <p className="text-gray-600 mb-4 ">
            Do you want to offer your services or products? Click below to get
            started.
          </p>
          <Link
            to={"/login"}
            className="bg-teal-800 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-teal-300 transition-colors mt-12"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Chooser;
