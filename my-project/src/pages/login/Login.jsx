import React, { useState } from "react";
import "./Login.css";
import axios from "../../api/axios"
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useAuth from "../../hook/useAuth";
function Login() {
 const navigate = useNavigate()
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const { setAuth } = useAuth();
  const handleSubmit = (e)=>{
  e.preventDefault();
  try {
    const res = axios.post("/api/users/login", { email, password });
    console.log(res?.data)
    const accessToken = res?.data?.accessToken;
    const useremail = res?.data?.email;
    const id = res?.data?._id;
    setAuth({accessToken,useremail,id})
    navigate("/")
  } catch (error) {
    console.log(error)
  }
  }
  return (
    <div className="w-full flex items-center bg-gray-100 flex-col h-screen">
      <div className="lg:w-1/4 w-full bg-white rounded-lg p-4 flex flex-col mt-10">
        <h2 className="login">Login</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <button type="submit" className="bg-orange-300 w-full">
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
