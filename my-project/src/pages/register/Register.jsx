import React from "react";
import Footer from "../../components/Footer";
import "./Register.css";

function Login() {
  return (
    <div className="w-full flex items-center bg-gray-100 flex-col h-screen">
      <div className="w-1/4 bg-white rounded-lg p-4 flex flex-col mt-10">
        <h2 className="reg">Register</h2>
        <form>
          <div className="">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter Username" />
          </div>
          <div className="">
            <label htmlFor="email">Email address</label>
            <input type="text" id="email" placeholder="Email" />
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          <button type="submit">Sign me up</button>
        </form>
      </div>
      <p className="my-5">
        Already have an account?{" "}
        <a href="./login" className="text-orange-400">
          Sign In
        </a>
      </p>
    </div>
  );
}

export default Login;
