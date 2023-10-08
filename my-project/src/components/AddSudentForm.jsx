import React, { useState } from "react";
import useAxiosPrivate from "../hook/useAxios";
import {toast} from "react-hot-toast"
const AddStudentForm = () => {
    const axiosprivate = useAxiosPrivate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password:"",
    phone: "",
    date: "",
    studentid: "",
    grade: "",
    parent: "",
    // courses: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubjectsChange = (e) => {
  //   const selectedSubjects = Array.from(
  //     e.target.selectedOptions,
  //     (option) => option.value
  //   );
    
  //   const formattedCourses = {};
  //   selectedSubjects.forEach((subject, index) => {
  //     formattedCourses[index + 1] = subject;
  //   });
  //   setFormData({
  //     ...formData,
  //     courses: [formattedCourses],
  //   });
  // };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
   
    try {
     const res = await axiosprivate.post("/api/student", formData)
     console.log(res.data)
     toast.success("student created")
     setFormData({
       name: "",
       email: "",
       password: "",
       phone: "",
       date: "",
       studentid: "",
       grade: "",
       parent: "",
      //  courses: [],
     });
    } catch (error) {
       if (
         error.response &&
         error.response.status >= 400 &&
         error.response.status <= 500
       ) {
         toast.error(error.response.data.message);
       }
    }
    
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2>Create Student</h2>
        <div className="w-full flex items-center space-x-2">
          <div className="w-1/2 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="*****"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex items-center space-x-2">
          <div className="w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              DOB
            </label>
            <input
              className="shadow appearance-none border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="date"
              id="date"
              placeholder="Date of birth"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full flex items-center space-x-2">
          <div className="w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              regNumber
            </label>
            <input
              className="shadow appearance-none border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="studentid"
              id="studentid"
              placeholder="regNumber"
              value={formData.studentid}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              grade
            </label>
            <input
              className="shadow appearance-none border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="grade"
              id="grade"
              placeholder="Grade"
              value={formData.grade}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            parentsName
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="parent"
            id="parent"
            placeholder="parents Name"
            value={formData.parent}
            onChange={handleInputChange}
          />
        </div>
        {/* Repeat this structure for other input fields */}
        {/* <div className="w-full mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subjects"
          >
            Subjects
          </label>
          <select
            multiple
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="subjects"
            id="subjects"
            onChange={handleSubjectsChange}
          >
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
           
          </select>
        </div> */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentForm;
