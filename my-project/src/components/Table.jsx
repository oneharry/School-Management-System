"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function Table({
  handleEditModal,
  handleDelete,
  handleStudentDetails,
  handleStudentScore,
  data,
  headers,
}) {
  // const [selectedOptions, setSelectedOptions] = useState([]);
  //   Start for Pagination
  const [PerItem, setPerItem] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * Number(PerItem);
  const currentItem = data.slice(offset, offset + Number(PerItem));
  const pageCount = Math.ceil(data.length / Number(PerItem));
  return (
    <div className="w-full">
      <div className="flex w-full overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              {headers?.map((header) => (
                <th key={header} className="font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItem?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
                <td>{item?.studentid}</td>
                <td>{item?.dob}</td>
                <td>{item?.grade}</td>
                <td>{item?.parent}</td>

                <td>
                  {item?.courses?.map((course, courseIndex) => {
                    const courseNames = Object.keys(course)
                      .filter((key) => key !== "_id") // Exclude _id
                      .map((key) => course[key]);
                    return (
                      <div key={courseIndex}>{courseNames.join(", ")}</div>
                    );
                  })}
                </td>
                <td>
                  <div className="flex items-center space-x-2">
                    <FaEdit size={20} onClick={() => handleEditModal(item)} />
                    <FaTrash
                      size={20}
                      onClick={() => handleDelete(item?._id)}
                    />
                    <button onClick={() => handleStudentDetails(item)}>
                      View
                    </button>
                    <button onClick={() => handleStudentScore(item)}>
                      Add score
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <!-- table-responsive //end --> */}
      </div>
      <div className="flex flex-col md:flex-row py-4">
        <div className="md:w-6/12 lg:w-6/12 md:mb-0 mb-8">
          <div className="md:flex w-72 md:items-center px-2 md:px-0 space-y-2 md:space-y-0 md:space-x-4 mt-10 md:mt-0 ">
            <label
              htmlFor="select"
              className="block text-sm font-medium text-gray-700"
            >
              Showing
            </label>
            <select
              value={PerItem}
              onChange={(e) => setPerItem(e.target.value)}
              id="select"
              aria-label="form-select-sm"
              className="block w-full p-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 sm:text-sm"
            >
              <option disabled value="">
                --Select--
              </option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
            <span className="text-sm text-gray-500 flex w-80">
              of {currentItem?.length} entries
            </span>
          </div>
        </div>
        <div className="md:w-7/12 lg:w-7/12 md:justify-end">
          <div className="mt-8 md:mt-0">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              containerClassName={"flex items-center space-x-2"}
              previousLinkClassName={"text-green-600"}
              nextLinkClassName={"text-green-600"}
              disabledClassName={"text-gray-400"}
              activeClassName={
                "text-gray-400 font-bold w-7 h-7 border-2 flex items-center justify-center rounded-lg space-x-2"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
