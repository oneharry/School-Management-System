import React, { useState } from "react";
import { FaBook, FaUsers } from "react-icons/fa";
import {
  FaUsersRectangle,
  FaUserTie,
  FaMoneyCheck,
  FaSheetPlastic,
} from "react-icons/fa6";
import {MdOutlineDashboardCustomize} from "react-icons/md"
import { AiOutlineLogout } from "react-icons/ai";
import NavItem from "./NavItem";
function Navigation({handleActive, active}) {
//   const [active, setActive] = useState("student");
//   const handleActive = (item) => {
//     setActive(item);
//   };
  return (
    <div className="w-[20%] h-screen bg-gray-50 overflow-y-auto">
      <div className="w-full">
        <div className="flex flex-col space-y-3 p-4">
          <div className="text-2xl font-bold">Dashboard</div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Welcome,</span>
            <span className="text-xs font-bold">Adama</span>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <NavItem
            Icon={MdOutlineDashboardCustomize}
            title="Dashboard"
            item="dashboard"
            active={active}
            handleActive={handleActive}
          />
          <NavItem
            Icon={FaUsers}
            title="Students"
            item="student"
            active={active}
            handleActive={handleActive}
          />
          <NavItem
            Icon={FaUserTie}
            title="Teachers"
            item="teacher"
            active={active}
            handleActive={handleActive}
          />
          <NavItem
            Icon={FaUsersRectangle}
            title="Classes"
            item="class"
            active={active}
            handleActive={handleActive}
          />
          <NavItem
            Icon={FaBook}
            title="Subjects"
            item="subject"
            active={active}
            handleActive={handleActive}
          />
          <NavItem
            Icon={FaSheetPlastic}
            title="Result"
            item="result"
            active={active}
            handleActive={handleActive}
          />
          <NavItem
            Icon={FaMoneyCheck}
            title="Fees"
            item="fee"
            active={active}
            handleActive={handleActive}
          />
        </div>
        <div className="w-full mt-5 mb-5">
          <NavItem
            Icon={AiOutlineLogout}
            title="LogOut"
            className="p-4"
            item="logout"
            active={active}
            handleActive={handleActive}
          />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
