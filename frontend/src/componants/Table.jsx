import React from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

export const Table = () => {
  const data = [
    {
      id: 1,
      name: "Whiskers",
      age: 2,
      weight: "4.5 kg",
      image: "https://placekitten.com/200/200", // Example image URL
    },
    {
      id: 2,
      name: "Fluffy",
      age: 3,
      weight: "5 kg",
      image: "https://placekitten.com/200/201", // Example image URL
    },
    {
      id: 3,
      name: "Mittens",
      age: 1,
      weight: "3.8 kg",
      image: "https://placekitten.com/200/202", // Example image URL
    },
    {
      id: 4,
      name: "Snowball",
      age: 4,
      weight: "6 kg",
      image: "https://placekitten.com/200/203", // Example image URL
    },
  ];
  return (
    <div className="overflow-x-auto">
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
            <tr className="text-center" key={row.id}>
              <th></th>
              <td className="font-bold">{row.name}</td>
              <td>{row.age} years</td>
              <td>{row.weight}</td>
              <td>
                <div className="flex justify-center">
                  <img
                    src={row.image}
                    alt={`Image of ${row.name}`}
                    className="h-12 w-12 object-cover rounded-full"
                  />
                </div>
              </td>
              <td>
                <button className="btn btn-circle btn-outline btn-sm hover:text-red-600">
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
                <Link to="/edit">
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
