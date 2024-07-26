import React, { useState } from "react";
import { GiWeight } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc";
import { IoSend } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

export const EditCat = () => {
  const { catName } = useParams(); // Extract catId from route parameters
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("weight", weight);
    formData.append("age", age);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch(`http://localhost:4000/cat/edit/${catName}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update cat");
      }

      setMessage("Cat updated successfully");
    } catch (error) {
      console.error("Error updating cat:", error);
      setMessage("An error occurred while updating the cat");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-1/2 m-auto h-full mt-32 flex flex-col gap-4">
      <h1 className="text-5xl font-bold text-center">Edit Your Cat</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        <label className="input input-bordered flex items-center gap-2">
          <GiWeight className="h-7 w-8 opacity-70" />
          <input
            type="text"
            className="grow"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
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
        {message && (
          <div
            className={`alert ${
              message.includes("success") ? "alert-success" : "alert-error"
            }`}
          >
            {message}
          </div>
        )}
        <div className="flex gap-2">
          <button
            type="submit"
            className={`btn btn-outline btn-info font-bold text-xl w-1/2 ${
              isLoading ? "loading" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Edit"}
            <IoSend className="text-xl" />
          </button>
          <Link className="w-full" to="/dashboard">
            <button className="btn btn-outline btn-info font-bold text-xl w-full">
              Back <BiArrowBack />
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
