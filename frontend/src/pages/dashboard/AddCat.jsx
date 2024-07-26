import React, { useState } from "react";
import { GiWeight } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc";
import { IoSend } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
export function AddCat() {
  const [catData, setCatData] = useState({
    catName: "",
    catAge: 0,
    catWeight: 0,
    catImage: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setCatData((prevData) => ({
          ...prevData,
          [name]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setCatData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/cat/addNewCat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(catData),
      });
      const data = await response.json()
      console.log(data);
      if (!response.ok) {
        throw new Error("Failed to add new cat");
      }

      const result = await response.json();
      alert("Cat added successfully");

      setCatData({
        catName: "",
        catAge: 0,
        catWeight: 0,
        catImage: null,
      });
      console.log(result);
    } catch (error) {
      console.error("Error adding new cat:", error);
      alert("An error occurred while adding the cat");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-1/2 m-auto h-full mt-32 flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-center">Add New Cat</h1>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            name="catName"
            className="grow"
            placeholder="Enter cat name"
            value={catData.catName}
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <GiWeight className="h-7 w-8 opacity-70" />
          <input
            type="number"
            name="catWeight"
            className="grow"
            placeholder="Weight"
            value={catData.catWeight}
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FcCalendar className="h-7 w-8 opacity-70" />
          <input
            type="number"
            name="catAge"
            className="grow"
            placeholder="Age"
            value={catData.catAge}
            onChange={handleChange}
          />
        </label>
        <input
          type="file"
          name="catImage"
          className="file-input file-input-bordered file-input-info w-full"
          onChange={handleChange}
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="btn btn-outline btn-info font-bold text-xl w-1/2"
          >
            Submit <IoSend className="text-xl" />
          </button>
          <Link className="w-full" to="/dashboard">
            <button className="btn btn-outline btn-info font-bold text-xl w-full">
              Back <BiArrowBack />
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}