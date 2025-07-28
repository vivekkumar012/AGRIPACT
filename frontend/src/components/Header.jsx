import React from "react";
import { Link } from "react-router-dom";
import w from "../assets/w.png";

function Header() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/farmer-using-tablet-standing-wheat-600nw-1767436760.jpg')",
        }}
      ></div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Header Navigation */}
      <header className="relative z-10 flex justify-between items-center px-6 py-4 text-white">
        <div className="flex items-center space-x-2">
          <Link to={"/"}>
            <img src={w} alt="Logo" className="w-7" />
          </Link>
          <span className="font-bold text-xl">AgriPact</span>
        </div>

        <ul className="flex items-center space-x-6 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/work">Work With Us</Link></li>
          <li><Link to="/guidelines">Guidelines</Link></li>
        </ul>

        <div className="space-x-4 font-semibold">
          <Link to={"/login"} className="rounded-lg border bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition">Login</Link>
          <Link to={"/register"} className="rounded-lg border border-white px-4 py-2 hover:bg-white hover:text-black transition">Sign Up</Link>
        </div>
      </header>

      {/* Hero Text */}
      <section className="relative z-10 flex justify-center items-center h-full px-4">
        <h1 className="text-white text-[48px] md:text-[64px] lg:text-[90px] leading-tight font-bold text-center font-montserrat max-w-5xl">
          The Revolutionary Impact of Technology on Agriculture
        </h1>
      </section>
      
    </div>
  );
}

export default Header;
