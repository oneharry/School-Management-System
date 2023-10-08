import React, { useState } from 'react'
import useAxiosPrivate from "../hook/useAxios";
import { toast } from 'react-hot-toast';
function CreateStaff() {
    const axiosprivate = useAxiosPrivate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [specialty, setSpecialty] = useState("");
    const [staffid, setStaffid] = useState("");

    const handleCreateStaff = async (e) => {
      e.preventDefault();
      try {
        const res = await axiosprivate.post("/api/staff", {
          name,
          phone,
          email,
          password,
          specialty,
          staffid,
        });
        toast.success("staff created successfully");
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setSpecialty("");
        setStaffid("");
        console.log(res.data);
      } catch (error) {
        toast.error("staff not created ", error);
      }
    };
  return (
    <div className="w-full flex items-center bg-gray-100 flex-col h-screen">
      <div className="lg:w-3/4 w-full bg-white rounded-lg p-4 flex flex-col mt-10">
        <h2 className="login">Staff Portal</h2>
        <form className="w-full" onSubmit={handleCreateStaff}>
          <div className="w-full">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Staff Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Staff Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              placeholder="Staff Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="specialty">Specialty:</label>
            <input
              type="text"
              id="specialty"
              placeholder="Staff Speciality"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="specialty">Staff ID</label>
            <input
              type="text"
              id="staffid"
              placeholder="Staff Speciality"
              value={staffid}
              onChange={(e) => setStaffid(e.target.value)}
            />
          </div>
          {/* <a href="#" className="forgot-password">
            Forgot Password?
          </a> */}
          <button type="submit" className="bg-orange-300 w-full">
            Create Staff
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateStaff