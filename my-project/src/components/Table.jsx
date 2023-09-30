"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function Table({
  icon: Icon,
  otherbtn,
  lists,
  link,
  nosofbtn,
  title,
  nocheckbox,
  handleCheckboxChange,
  selectedOptions,
  btnbgcolor,
  data,
  headers,
  // handleDetails,
  // showdetails,
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
  const headerD = headers.map((header) => {
    const key = Object.keys(header)[1];
    console.log(header[key]);
    return header[key];
  });
  const [showdetails, setShowDetails] = useState(
    Array(lists?.length).fill(false)
  );
  const [active, setActive] = useState(null);

  const handleDetails = (index) => {
    const newShowDetails = [...showdetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };
  return (
    <div className="w-full">
      <div className="flex w-full overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headerD.map((header) => (
                <th key={header} className="text-sm text-center" scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItem.length > 0 ? (
              currentItem?.map((item, i) => (
                <tr
                  key={i}
                  className="bg-white px-3 py-3 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className={`px-2 py-2`}>
                    {console.log(item)}
                    <label
                      className={`flex cursor-pointer gap-2 md:w-[full] w-full items-center`}
                    >
                      <span
                        className={`text-sm text-center ${
                          nocheckbox && "pl-0"
                        }`}
                      >
                        {!Icon ? i + 1 : " "}
                      </span>
                    </label>
                  </td>
                  {/* Map over the data keys to dynamically generate table cells */}
                  {headers.slice(1, -1).map((header, index) => {
                    const key = Object.keys(header)[1];
                    return (
                      <td key={index} className="text-sm text-center">
                        {item[key]}
                      </td>
                    );
                  })}
                  <td className="flex items-center justify-center relative">
                    <div className="flex space-x-1 items-center">
                      {nosofbtn == 3 && (
                        <>
                          <Link to="/" className="">
                            {/* <button className="px-2 py-1 bg-slate-600 text-white text-sm rounded-md">
                              {title.btn1}{" "}
                            </button> */}
                            <FaEdit size={14} color="lightblue"/>
                          </Link>

                          <Link to="">
                            {/* <button
                              className="px-1 py-1 bg-orange-400 text-white text-sm rounded-md"
                            
                            >
                              {title.btn2}
                            </button> */}
                            <FaTrash size={14} color="red"/>
                          </Link>
                          <Link to="">
                            <button
                              className="px-1 py-1 bg-blue-400 text-white text-sm rounded-md"
                              // onClick={handleView(item?.id)}
                            >
                              {title.btn3}
                            </button>
                          </Link>
                        </>
                      )}
                      {nosofbtn == 1 && (
                        <Link to="/">
                          <button
                            className={`px-2 py-1 ${
                              btnbgcolor ? btnbgcolor : "bg-slate-600"
                            } text-white text-sm rounded-md flex items-center justify-center`}
                          >
                            {title}{" "}
                          </button>
                        </Link>
                      )}
                      {(otherbtn || Icon) && (
                        <div
                          className={`px-2 py-1 bg-blue-100
                             text-gray-500 text-sm rounded-md flex items-center justify-center mt-2 cursor-pointer`}
                        >
                          <Icon size={20} onClick={() => handleDetails(i)} />
                        </div>
                      )}
                    </div>
                    {showdetails[i] && (
                      <div className="absolute top-6 w-24 z-50">
                        <div className="rounded-md bg-white border border-gray-500 mb-3 my-3">
                          {lists.map((list, j) => (
                            <div
                              key={list}
                              className={` px-1 py-1 text-xs flex flex-col items-center justify-center border-b border-gray-100`}
                            >
                              {console.log(list)}
                              <span
                                className={`${
                                  list === active ? "bg-orange-200" : "bg-white"
                                } w-full cursor-pointer`}
                                onClick={() => setActive(list)}
                              >
                                {list}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length + (nocheckbox ? 0 : 1)}>
                  No Records
                </td>
              </tr>
            )}
          </tbody>
        </table>
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
              of {currentItem.length} entries
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
