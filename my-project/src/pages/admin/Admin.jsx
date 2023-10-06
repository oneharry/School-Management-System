import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Table from "../../components/Table";
import { FaSearch } from "react-icons/fa";
import AddStudentModal from "../../components/AddStudentModal";
import useAxiosPrivate from "../../hook/useAxios";
import { toast } from "react-hot-toast";
import EditStudentModal from "../../components/EditStudentModal";
import Studentdetails from "./Studentdetails";
import ParentsTable from "../../components/ParentsTable";
import AddParentModal from "../../components/AddParentModal";
import AddStaffModal from "../../components/AddStaffModal";
import StaffsTable from "../../components/StaffsTable";
import StudentScores from "./StudentScores";
const thead = [
  "S/N",
  "Name",
  "Email",
  "Phone",
  "Studentid",
  "DOB",
  "Grade",
  "Parent",
  "Courses",
  "Action",
];
const theadparent = ["S/N", "Name", "Email", "Phone", "ParentId"];
const theadstaff = ["S/N", "Name", "Email", "Phone", " Specialty", "Action"];
function Admin() {
  const axiosprivate = useAxiosPrivate();
  const [students, setStudents] = useState([]);
  const [parent, setParent] = useState([])
  const [staff, setStaff] = useState([]);
  const fetchStudents = async () => {
    try {
      const result = await axiosprivate.get("/api/students");
      console.log(result?.data?.data);
      setStudents(result?.data?.data);
    } catch (error) {
      toast.error("could not fetch data", error);
    }
  };
  const fetchParents = async () => {
    try {
      const result = await axiosprivate.get("/api/parent");
      console.log(result?.data?.data);
      setParent(result?.data?.data);
    } catch (error) {
      toast.error("could not fetch data", error);
    }
  };
  const fetchStaffs = async () => {
    try {
      const result = await axiosprivate.get("/api/staff");
      console.log(result?.data?.data);
      setStaff(result?.data?.data);
    } catch (error) {
      toast.error("could not fetch data", error);
    }
  };
  useEffect(() => {
    fetchStudents();
    fetchParents();
    fetchStaffs()
  }, [axiosprivate]);
  const [active, setActive] = useState("dashboard");

  const handleActive = (item) => {
    setActive(item);
  };
  const [modal, setModal] = useState(false);
  const [editmodal, setEditModal] = useState(false);
  const [parentmodal, setParentModal] = useState(false);
  const [staffmodal, setStaffModal] = useState(false);

  const [studentdetailsmodal, setStudentDetailsModal] = useState(false);
  const [studentscoresmodal, setStudentScoreModal] = useState(false);

  const [selectedstudent, setSelectedStudent] = useState(null);
  const [selectedparent, setSelectedParent] = useState(null);
  const handleClose = () => {
    setModal(!modal);
  };
  const handleStaffClose = () => {
    setStaffModal(!staffmodal);
  };
  const handleScoreClose = ()=>{
    setStudentScoreModal(!studentscoresmodal)
  }
  const handleParentClose = () => {
    setParentModal(!parentmodal);
  };
  const handleStudentClose = () => {
    setStudentDetailsModal(!studentdetailsmodal);
  };
  const handleModel = () => {
    setModal(!modal);
    
   
  };
  const handleParentM = ()=>{
setParentModal(!parentmodal);
  }
  const handleStaffM = () => {
    setStaffModal(!staffmodal);
  };
  const handleStudentDetails = (item) => {
    console.log(item);
    setSelectedStudent(item);
    setStudentDetailsModal(!studentdetailsmodal);
  };
  const handleStudentScore = (item) => {
    console.log(item);
    setSelectedStudent(item);
    setStudentScoreModal(!studentscoresmodal);
  };
  const handleEditModal = (item) => {
    console.log(item);
    setSelectedStudent(item);
    setEditModal(!editmodal);
  };
  const handleDelete = async (id) => {
    console.log(id);
    const check = confirm(`are you sure you want to delete ${id}`);
    if (!check) return null;
    try {
      const result = await axiosprivate.delete(`/api/student/${id}`);
      toast.success("student deleted");
      fetchStudents();
    } catch (error) {
      toast.error("could not fetch data", error);
    }
  };
  return (
    <>
      <Header />
      <div className="flex bg-gray-100">
        <Navigation handleActive={handleActive} active={active} />
        <div className="w-[80%] bg-orange-200 h-auto">
          {active === "dashboard" && (
            <section className="w-full h-screen p-4">
              <h2 className="py-4 text-xl font-semibold">Dashboard </h2>
              <div className="w-full lg:flex items-center lg:space-x-3 space-y-2">
                <div className="w-full h-[100px] flex flex-col bg-orange-100 items-center justify-center rounded-lg">
                  <h2>1000</h2>
                  <span>Total students</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-blue-100 items-center justify-center rounded-lg">
                  <h2>100</h2>
                  <span>Total Teachers</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-green-100 items-center justify-center rounded-lg">
                  <h2>10</h2>
                  <span>No of Classes</span>
                </div>
                {/* cards */}
              </div>
            </section>
          )}
          {active === "student" && (
            <section className="w-full h-auto">
              <div className="w-full p-4">
                <h2 className="my-4">Students</h2>

                <div className="w-full lg:flex items-center lg:space-x-3 space-y-2">
                  <div className="w-full h-[100px] flex flex-col bg-orange-100 items-center justify-center rounded-lg">
                    <h2>1000</h2>
                    <span>Total students</span>
                  </div>
                  <div className="w-full h-[100px] flex flex-col bg-blue-100 items-center justify-center rounded-lg">
                    <h2>10</h2>
                    <span>Total Teachers</span>
                  </div>
                  <div className="w-full h-[100px] flex flex-col bg-green-100 items-center justify-center rounded-lg">
                    <h2>10</h2>
                    <span>No of Classes</span>
                  </div>
                  {/* cards */}
                </div>
                <div className="w-full mt-10">
                  <div className="w-full mb-5 lg:flex items-center justify-between space-y-1">
                    <div className=" lg:w-2/4 lg:flex items-center lg:space-x-3 space-y-1">
                      {/* search */}
                      <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                        <FaSearch size={20} color="gray" />
                        <input
                          placeholder="search students"
                          className="w-full"
                        />
                      </div>

                      {/* Filter */}
                      <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                        <select className="w-full outline-none">
                          <option>Class</option>
                          <option>Subject</option>
                        </select>
                      </div>
                    </div>

                    <button
                      className="px-2 py-2 bg-blue-300 rounded-2xl text-xs text-white font-semibold"
                      onClick={handleModel}
                    >
                      Add Student
                    </button>
                  </div>
                  {/* <Table
                    data={data3}
                    headers={headers3}
                    nocheckbox
                    nosofbtn={3}
                    title={{ btn1: "Update", btn2: "Delete", btn3: "View" }}
                  /> */}
                </div>
                <div className="bg-white w-[80%]">
                  {/* <Table
                      data={data3}
                      headers={headers3}
                      nocheckbox
                      nosofbtn={3}
                      title={{ btn1: "Update", btn2: "Delete", btn3: "View" }}
                    /> */}
                </div>
              </div>
            </section>
          )}
          {active === "teacher" && (
            <section className="w-full h-screen">
              <div className="w-full p-4">
                <h2 className="my-4">Teachers</h2>
                <div className="w-full mt-10">
                  <div className="w-full mb-5 flex items-center justify-between">
                    <div className=" w-2/4 flex items-center space-x-3">
                      {/* search */}
                      <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                        <FaSearch size={20} color="gray" />
                        <input
                          placeholder="search students"
                          className="w-full"
                        />
                      </div>
                      <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                        <select className="w-full outline-none">
                          <option>Class</option>
                          <option>Subject</option>
                        </select>
                      </div>
                      {/* Filter */}
                    </div>
                    <button
                      className="px-2 py-2 bg-blue-300 rounded-2xl text-xs text-white font-semibold"
                      onClick={handleModel}
                    >
                      Add
                    </button>
                  </div>
                  <div className="bg-white w-full h-[70vh] overflow-y-scroll">
                    <Table
                      data={students}
                      headers={thead}
                      handleEditModal={handleEditModal}
                      handleDelete={handleDelete}
                      handleStudentDetails={handleStudentDetails}
                      handleStudentScore={handleStudentScore}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
          {active === "parent" && (
            <section className="w-full h-screen">
              <div className="w-full p-4">
                <h2 className="my-4">Add Parents</h2>

                <div className="w-full mt-10">
                  <div className="w-full mb-5 flex items-center justify-between">
                    <div className=" w-2/4 flex items-center space-x-3">
                      {/* search */}
                      <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                        <FaSearch size={20} color="gray" />
                        <input
                          placeholder="search students"
                          className="w-full"
                        />
                      </div>
                      <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                        <select className="w-full outline-none">
                          <option>Class</option>
                          <option>Subject</option>
                        </select>
                      </div>
                      {/* Filter */}
                    </div>
                    <button
                      className="px-2 py-2 bg-blue-300 rounded-2xl text-xs text-white font-semibold"
                      onClick={handleParentM}
                    >
                      Add
                    </button>
                  </div>
                  <div className="bg-white w-full h-[70vh] overflow-y-scroll">
                    <ParentsTable
                      data={parent}
                      headers={theadparent}
                      // handleEditModal={handleEditModal}
                      // handleDelete={handleDelete}
                      // handleStudentDetails={handleStudentDetails}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
          {active === "staffs" && (
            <section className="w-full h-screen">
              <div className="w-full p-4">
                <h2 className="my-4">Add Staffs</h2>

                <div className="w-full mt-10">
                  <div className="w-full mb-5 flex items-center justify-between">
                    <div className=" w-2/4 flex items-center space-x-3">
                      {/* search */}
                      <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                        <FaSearch size={20} color="gray" />
                        <input
                          placeholder="search students"
                          className="w-full"
                        />
                      </div>
                      <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                        <select className="w-full outline-none">
                          <option>Class</option>
                          <option>Subject</option>
                        </select>
                      </div>
                      {/* Filter */}
                    </div>
                    <button
                      className="px-2 py-2 bg-blue-300 rounded-2xl text-xs text-white font-semibold"
                      onClick={handleStaffM}
                    >
                      Add
                    </button>
                  </div>
                  <div className="bg-white w-full h-[70vh] overflow-y-scroll">
                    <StaffsTable
                      data={staff}
                      headers={theadstaff}
                      handleEditModal={handleEditModal}
                      handleDelete={handleDelete}
                      handleStudentDetails={handleStudentDetails}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
          {active === "subject" && (
            <section className="w-full h-screen">
              <div className="w-full p-4">
                <h2 className="my-4">Subjects</h2>

                {/* <div className="w-full flex items-center space-x-3">
                <div className="w-full h-[100px] flex flex-col bg-orange-100 items-center justify-center rounded-lg">
                  <h2>1000</h2>
                  <span>Total students</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-blue-100 items-center justify-center rounded-lg">
                  <h2>100</h2>
                  <span>Total Teachers</span>
                </div>
                <div className="w-full h-[100px] flex flex-col bg-green-100 items-center justify-center rounded-lg">
                  <h2>10</h2>
                  <span>No of Classes</span>
                </div>
              
              </div> */}
                <div className="w-full mt-10">
                  <div className="w-full mb-5 flex items-center justify-end">
                    {/* <div className=" w-2/4 flex items-center space-x-3">
                 
                    <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                      <FaSearch size={20} color="gray" />
                      <input placeholder="search students" className="w-full" />
                    </div>
                    <div className="w-full flex items-center rounded-2xl bg-white p-2 space-x-2">
                      <select className="w-full outline-none">
                        <option>Class</option>
                        <option>Subject</option>
                      </select>
                    </div>
                  
                  </div> */}
                    <button className="px-2 py-2 bg-blue-300 rounded-2xl text-xs text-white font-semibold">
                      Add subjects
                    </button>
                  </div>
                  <div className="bg-white">
                    {/* <Table data={data3} headers={thead} /> */}
                  </div>
                </div>
              </div>
            </section>
          )}
          {active === "result" && <section>Result</section>}
          {active === "fee" && <section>Fees</section>}
          <AddStudentModal
            visible={modal}
            setVisible={setModal}
            handleClose={handleClose}
          />
          <AddParentModal
            visible={parentmodal}
            setVisible={setModal}
            handleClose={handleParentClose}
          />
          <AddStaffModal
            visible={staffmodal}
            setVisible={setModal}
            handleClose={handleStaffClose}
          />
          <EditStudentModal
            visible={editmodal}
            setVisible={setEditModal}
            handleClose={handleClose}
            selectedstudent={selectedstudent}
          />
          <Studentdetails
            visible={studentdetailsmodal}
            setVisible={setStudentDetailsModal}
            handleClose={handleStudentClose}
            selectedstudent={selectedstudent}
          />
          <StudentScores
            visible={studentscoresmodal}
            setVisible={setStudentScoreModal}
            handleClose={handleScoreClose}
            selectedstudent={selectedstudent}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Admin;
