import React, { useState } from "react";
import { GiWeight } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc"
import { IoSend } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

export const EditCat = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <div className="w-1/2 m-auto h-full mt-32 flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-center">Your Cat is growing</h1>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            className="grow"
            placeholder="Enter cat name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 ">
          <GiWeight className="h-7 w-8 opacity-70" />
          <input
            type="text"
            className="grow"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 ">
          <FcCalendar className="h-7 w-8 opacity-70" />
          <input
            type="number"
            className="grow"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <input
          type="file"
          className="file-input file-input-bordered file-input-info w-full"
          onChange={handleFileChange}
        />
        <div className="flex gap-2">
          <button className="btn btn-outline btn-info font-bold text-xl w-1/2">
            Edit<IoSend className="text-xl" />
          </button>
          <Link className="w-full" to="/dashboard">
            <button className="btn btn-outline btn-info font-bold text-xl w-full">
              Back <BiArrowBack />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};