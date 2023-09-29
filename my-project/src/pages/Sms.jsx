import React, { useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import {FaBookReader} from 'react-icons/fa'
import "./Sms.css"
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';
function Sms() {
  const {auth}=useAuth()
  const [activepage, setActivePage] = useState("home");
  const handlePages = (page)=>{
    setActivePage(page)
  }
  return (
    <main>
      <Header handlePages={handlePages} activepage={activepage} />
      <section className="w-full h-screen bg-gray-500 bgImage flex items-center justify-center relative">
        {activepage === "home" && (
          <div className="flex flex-col lg:w-2/4 w-3/4 items-center space-y-2">
            <div className="lg:text-4xl text-xl text-white font-bold bg-black/40 px-2 py-2 ">
              School Management Portal
            </div>
            {auth?.useremail ? (
              <Link
                to="/admin"
                className="w-full flex items-center justify-center"
              >
                <button className="w-[70%] bg-gray-700 px-2 py-2 rounded-lg  text-white font-semibold hover:text-orange-300 duration-100 transition all ease-in">
                 Go to Dashboard
                </button>
              </Link>
            ) : (
              <Link
                to="/login"
                className="w-full flex items-center justify-center"
              >
                <button className="w-[70%] bg-gray-700 px-2 py-2 rounded-lg  text-white font-semibold hover:text-orange-300 duration-100 transition all ease-in">
                  Get Started
                </button>
              </Link>
            )}
          </div>
        )}

        {activepage === "about" && (
          <div className="flex flex-col lg:w-3/4 w-full items-center space-y-2 absolute rounded-lg bg-black">
            <div className="flex items-center justify-center space-x-3 py-4">
              <h2 className="text-white font-bold text-xl">About Us</h2>
              <FaBookReader color="orange" size={20} />
            </div>

            <span className="text-white p-4 flex flex-col text-justify">
              <p>
                Welcome to our School Management Portal, the digital hub for
                educational excellence! We are passionate about transforming
                traditional school management into a seamless, efficient, and
                collaborative experience for administrators, teachers, students,
                and parents. At our core, we are dedicated to simplifying the
                complexities of school administration. Our mission is to empower
                educational institutions with cutting-edge technology that
                enhances every facet of the learning journey.
              </p>
              <h2>Our Commitment</h2>
              <p>
                We embrace innovation to continually improve and provide you
                with the latest tools and features that adapt to the evolving
                needs of the education sector.
              </p>
              <p>
                We understand that your time is valuable. Our platform
                streamlines administrative tasks, allowing educators to focus on
                what they do best – educating students. -
              </p>

              {/* **Our Commitment:** - **Innovation**: **Accessibility**: We
              believe that education should be accessible to all. Our platform
              is designed with user-friendly interfaces and accessibility
              features to ensure everyone can participate. - **Data-Driven**: We
              harness the power of data to help schools make informed decisions.
              Our analytics and reporting tools provide valuable insights for
              academic growth and institutional success. **What We Offer:** -
              **Student Management**: Easily manage student records, attendance,
              and performance tracking. - **Teacher Support**: Empower educators
              with tools for lesson planning, grading, and communication. -
              **Parent Engagement**: Keep parents informed and engaged in their
              child's education through real-time updates and communication. -
              **Administrative Tools**: Streamline administrative tasks, from
              admissions to financial management, with our comprehensive suite
              of tools. - **Security and Privacy**: We prioritize the security
              and privacy of your data, ensuring that your information is
              protected. Join us on this educational journey, where we work
              together to create a brighter future for students, teachers, and
              schools. Together, we aim to redefine school management, making it
              more efficient, collaborative, and accessible than ever before.
              Thank you for choosing us as your partner in education. */}
            </span>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}

export default Sms