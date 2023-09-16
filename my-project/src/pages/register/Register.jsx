import React from "react";
import Footer from "../../components/Footer";
import "./Register.css";

function Login() {
  return (
    <div className="login-container">
      <h2 className="reg">Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter Username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="text" id="username" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter Password" />
        </div>
        <button type="submit">Sign me up</button>
      </form>
      <p>Already have an account? <a href="./login" className="sign-In">Sign In</a></p>
    </div> 
  );
}

export default Login;
