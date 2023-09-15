import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="container">
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
        <button type="submit">Sign In</button>
        <p>
          Don't have an account?{" "}
          <a href="./register" className="sign-up">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
