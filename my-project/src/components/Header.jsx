import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
function Header({ handlePages, activepage }) {
  // let auth = false;
  const { auth,setAuth } = useAuth();
  const navigate = useNavigate()
  console.log(auth);
  const handleLogout = ()=>{
    setAuth({})
   navigate("/")
  }
  return (
    <div className="w-full lg:h-[10vh] h-[20vh] mb-5 lg:mb-0">
      <div className="lg:w-3/5 w-full mx-auto lg:flex items-center lg:justify-between justify-center py-2 ">
        <Link to="/">
          <div className="text-center">School Management Portal</div>
        </Link>
        <div className="flex items-center space-x-5 justify-center">
          <div
            onClick={() => handlePages("home")}
            className={`cursor-pointer ${
              activepage === "home"
                ? "border-b border-orange-400 text-orange-400"
                : "  text-gray-700"
            }`}
          >
            Home
          </div>
          <div
            onClick={() => handlePages("about")}
            className={`cursor-pointer ${
              activepage === "about"
                ? "border-b border-orange-400 text-orange-400"
                : "  text-gray-700"
            }`}
          >
            About
          </div>
          <div
            className={`cursor-pointer ${
              activepage === "features"
                ? "border-b border-orange-400 text-orange-400"
                : " text-gray-700"
            }`}
            onClick={() => handlePages("features")}
          >
            features
          </div>
          <div
            className={`cursor-pointer ${
              activepage === "contactus"
                ? "border-b border-orange-400 text-orange-400"
                : " text-gray-700"
            }`}
            onClick={() => handlePages("contactus")}
          >
            Contact us
          </div>
        </div>
        <div className="flex items-center justify-center">
          {auth.designation ? (
            <>
              <div className="flex items-center space-x-1">
                <h2 className="text-xs">{auth?.designation}</h2>
                <button
                  className="px-2 py-1 rounded-md bg-orange-300 text-xs text-white font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link to="/login">Login/Register</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
