import React, { useState } from "react";

function SubjectScoreForm() {
  const [subjectScores, setSubjectScores] = useState([]);
  const [formData, setFormData] = useState({
    subject: "",
    score: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 const handleAdd = ()=>{
const newSubjectScore = { ...formData };
setSubjectScores([...subjectScores, newSubjectScore]);
setFormData({ subject: "", score: "" });
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(subjectScores)
  };

  return (
    <div className="w-3/5 mx-auto">
      <h1 className="text-center">Subject and Score Form</h1>

      <form onSubmit={handleSubmit} className="w-full">
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
        <button type="submit">Submit</button>
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
