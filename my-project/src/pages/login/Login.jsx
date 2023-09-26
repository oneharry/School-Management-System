import React from "react";
import "./Login.css";
import axios from "../../api/axios"
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
function Login() {

  const handleSubmit = (e)=>{
  e.preventDefault();
  try {
    const res = axios.post("/api/users/login", {});
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
  }
  return (
    <div className="w-full flex items-center bg-gray-100 flex-col h-screen">
      <div className="w-1/4 bg-white rounded-lg p-4 flex flex-col mt-10">
        <h2 className="login">Login</h2>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Enter Username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <button type="submit" className="bg-orange-300">
            Sign In
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="./register" className="text-orange-400">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
