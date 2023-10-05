import React from 'react'

function CreateStaff() {
  return (
    <div className="w-full flex items-center bg-gray-100 flex-col h-screen">
      <div className="lg:w-1/4 w-full bg-white rounded-lg p-4 flex flex-col mt-10">
        <h2 className="login">Staff Portal</h2>
        <form className="w-full">
          <div className="w-full">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="email"
              placeholder="Staff Name"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Staff Email"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              placeholder="Staff Phone"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="specialty">Specialty:</label>
            <input
              type="text"
              id="specialty"
              placeholder="Staff Speciality"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="staff-id"
              placeholder="staff id"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <a href="#" className="forgot-password">
            Forgot Password?
          </a> */}
          <button type="submit" className="bg-orange-300 w-full">
            Sign In
          </button>
        </form>
        {/* <p>
          Don't have an account?{" "}
          <a href="./register" className="text-orange-400">
            Sign Up
          </a>
        </p> */}
      </div>
    </div>
  );
}

export default CreateStaff