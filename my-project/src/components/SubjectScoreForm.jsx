import React, { useState } from "react";
import useAxiosPrivate from "../hook/useAxios";
import toast from "react-hot-toast";
function SubjectScoreForm({ selectedstudent }) {
  console.log(selectedstudent);
  const id = selectedstudent?.studentid;
  const grade = selectedstudent?.grade;
  console.log(id, grade);
  const axiosprivate = useAxiosPrivate();
  const [subjectScores, setSubjectScores] = useState([]);
  const [formData, setFormData] = useState({
    subject: "",
    score: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAdd = (e) => {
    e.preventDefault()
    const newSubjectScore = { ...formData };
    setSubjectScores([...subjectScores, newSubjectScore]);
    setFormData({ subject: "", score: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosprivate.put(`/api/student/${grade}/${id}`, subjectScores);
      toast.success("score created successfully");
      setFormData({ subject: "", score: "" });
    } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
      toast.error(error.response.data.message);
    }
    }

    console.log(subjectScores)
  };

  return (
    <div className="w-3/5 mx-auto">
      <h1 className="text-center">Subject and Score Form</h1>

      <form className="w-full">
        <div className="flex flex-col w-full">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="score">Score:</label>
          <input
            type="number"
            id="score"
            name="score"
            value={formData.score}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleAdd} className="bg-white p-2 mt-2">
          Add Subject
        </button>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div>
        <h2>Subject and Score List</h2>
        <ul>
          {subjectScores.map((subjectScore, index) => (
            <li key={index}>
              Subject: {subjectScore.subject}, Score: {subjectScore.score}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SubjectScoreForm;
