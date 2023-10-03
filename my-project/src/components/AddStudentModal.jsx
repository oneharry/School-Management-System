"use client";
import React from "react";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useRef } from "react";
import { useEffect } from "react";
import AddSudentForm from "./AddSudentForm";
function AddStudentModal({
  visible,
  setVisible,
  handleClose,
}) {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  // Add a click event listener to the document body to close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const showDropDown = () => {
    setShow(!show);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  if (!visible) return null;

  return (
    <>
      <div
        className="w-full bg-gray-300 absolute -top-4 left-0 py-5 z-50 px-4 flex items-center justify-between"
        onClick={() => setVisible(false)}
      >
       
        <div
          className="flex w-2/4 items-center justify-center space-x-5 md:mr-20"
          onClick={stopPropagation}
        >
          
        </div>
        <div>
          <MdCancel
            size={24}
            className="text-red-500 cursor-pointer"
            onClick={() => handleClose()}
          />
        </div>
      </div>
      {/* show dropdown */}

      <div
        className="w-full mx-auto absolute z-50 pt-2 top-10 left-0 flex items-start "
      >
          <div className="w-full bg-gray-700/40 flex items-start justify-center h-auto z-50">
            <div
              className="lg:w-[50%] w-[70%] bg-gray-200 px-2 rounded-lg"
              ref={dropdownRef}
            >
              <div className="w-full px-4 flex flex-col">
                {/* <div className="w-full flex items-center justify-between">
                  <h2 className="font-bold text-sm text-gray-700">
                    Add Student
                  </h2>
                </div> */}
                <AddSudentForm/>
              </div>
            </div>
          </div>
       
      </div>
    </>
  );
}

export default AddStudentModal;
