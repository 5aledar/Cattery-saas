import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

export const Table = () => {
  const [data, setData] = useState([]);
  // const [catName, setCatName] = useState(null)
  const [deleting, setDeleting] = useState(false);
  const getCatData = async () => {
    const res = await fetch("http://localhost:4000/cat/getAllCats");
    const cats = await res.json();
    setData(cats);
  };

  const handleClick = async (row) => {
    const res = await fetch(`http://localhost:4000/cat/delete/${row.catName}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    setDeleting(!deleting);
  };
  useEffect(() => {
    getCatData();
  }, [deleting]);

  return (
    <div className="overflow-x-auto mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-center text-lg"></th>
            <th className="text-center text-lg">Name</th>
            <th className="text-center text-lg">Age</th>
            <th className="text-center text-lg">Weight</th>
            <th className="text-center text-lg">Image</th>
            <th className="text-center text-lg">Delete</th>
            <th className="text-lg">Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {data.map((row) => (
            <tr className="text-center" key={row._id}>
              <th></th>
              <td className="font-bold">{row.catName}</td>
              <td>{row.catAge} years</td>
              <td>{row.catWeight}</td>
              <td>
                <div className="flex justify-center">
                  <img
                    src={row.catImage}
                    alt={`Image of ${row.catName}`}
                    className="h-12 w-12 object-cover rounded-full"
                  />
                </div>
              </td>
              <td>
                <button
                  className="btn btn-circle btn-outline btn-sm hover:text-red-600"
                  onClick={() => handleClick(row)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
              <td className="flex gap-2 ">
                <Link to={`/edit/${row.catName}`}>
                  <button className="btn btn-outline btn-warning btn-s">
                    Edit <MdEdit />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  );
};
