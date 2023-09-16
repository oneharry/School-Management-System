import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'

function Admin() {
     const [active, setActive] = useState("dashboard");
     const handleActive = (item) => {
       setActive(item);
     };
  return (
    <>
      <Header />
      <div className="flex bg-gray-100">
        <Navigation handleActive={handleActive} active={active} />
        {active === "dashboard" && <section>Admin</section>}
        {active === "student" && <section>Student</section>}
        {active === "teacher" && <section>Teacher</section>}
        {active === "class" && <section>Class</section>}
        {active === "subject" && <section>Subject</section>}
        {active === "result" && <section>Result</section>}
        {active === "fee" && <section>Fees</section>}
      
      </div>

      <Footer />
    </>
  );
}

export default Admin