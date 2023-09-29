import React, { useState } from "react";
import Footer from "../../components/Footer";
import "./Register.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(designation)
    try {
      const res = await axios.post("/api/users/register", {
        username,
        email,
        password,
        designation
      });
      console.log(res.data)
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex items-center bg-gray-100 flex-col h-screen">
      <div className="lg:w-1/4 w-full bg-white rounded-lg p-4 flex flex-col mt-10">
        <h2 className="reg">Register</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="password">Designation</label>
            <select
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option>select</option>
              <option>student</option>
              <option>teacher</option>
              <option>admin</option>
            </select>
            {/* <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> */}
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
