import React, { useState } from "react";
import useAxiosPrivate from "../hook/useAxios";
import { toast } from "react-hot-toast";
function CreateParent() {
 const axiosprivate = useAxiosPrivate()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [parentid, setParentid] = useState("");

const handleCreateParent = async(e)=>{
     e.preventDefault();
    try {
        const res = await axiosprivate.post("/api/parent", {
          name,
          phone,
          email,
          parentid
        });
       toast.success("parent created successfully");
       setName("")
       setPhone("");
       setEmail("");
       setParentid("");
       console.log(res.data)
    } catch (error) {
        toast.error("parent not created ",error)
    }
    
    
}
  return (
    <div className="w-full flex items-center bg-gray-100 flex-col h-screen">
      <div className="lg:w-3/4 w-full bg-white rounded-lg p-4 flex flex-col mt-10">
        <h2 className="login">Parent Portal</h2>
        <form className="w-full" onSubmit={handleCreateParent}>
          <div className="w-full">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Parent Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              placeholder="Parent Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Parent email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">Parentid</label>
            <input
              type="text"
              id="parentid"
              placeholder="Parent Id"
              value={parentid}
              onChange={(e) => setParentid(e.target.value)}
            />
          </div>
          {/* <a href="#" className="forgot-password">
            Forgot Password?
          </a> */}
          <button type="submit" className="bg-orange-300 w-full">
            CreateParent
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

export default CreateParent;
