import React, { useState, useEffect } from "react";
import { GiWeight } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc";
import { IoSend } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

export const EditCat = () => {
  const { catName } = useParams();
  console.log(catName);
  const [catData, setCatData] = useState({
    catName: "",
    catWeight: "",
    catAge: "",
    file: null,
    filePreview: "", // To show file preview if needed
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/cat/getCatByName/${catName}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cat data");
        }
        console.log("===");
        const data = await response.json();
        setCatData({
          catName: data.catName || "",
          catWeight: data.catWeight || "",
          catAge: data.catAge || "",
          file: null,
          filePreview: data.catImage || "", // Handle default value for filePreview
        });
        console.log("============================",data);
      } catch (error) {
        console.error("Error fetching cat data:", error);
      }
    };

    fetchCatData();
  }, [catName]);
  console.log(catData);
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    console.log(name, value, type, files);
    if (type === "file") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setCatData((prevData) => ({
          ...prevData,
          file: file,
          filePreview: reader.result,
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("name", catData.name);
    formData.append("weight", catData.weight);
    formData.append("age", catData.age);
    if (catData.file) {
      formData.append("file", catData.file);
    }
      console.log("+++++",formData);
    try {
      const response = await fetch(
        `http://localhost:4000/cat/edit/${catName}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(catData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update cat");
      }
      const data = await response.json()
      setMessage("Cat updated successfully");
    } catch (error) {
      console.log(error.message);
      setMessage("An error occurred while updating the cat");
    } finally {
      setIsLoading(false);
    }
  };
  console.log(catData);
  return (
    <div className="w-1/2 m-auto h-full mt-32 flex flex-col gap-4">
      <h1 className="text-5xl font-bold text-center">Edit Your Cat</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            name="name"
            className="grow"
            placeholder="Enter cat name"
            value={catData.catName}
            onChange={(e)=>setCatData({ ...catData, catName: e.target.value })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <GiWeight className="h-7 w-8 opacity-70" />
          <input
            type="text"
            name="weight"
            className="grow"
            placeholder="Weight"
            value={catData.catWeight}
            onChange={(e)=>setCatData({...catData, catWeight:e.target.value})}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FcCalendar className="h-7 w-8 opacity-70" />
          <input
            type="number"
            name="age"
            className="grow"
            placeholder="Age"
            value={catData.catAge}
            onChange={(e)=>setCatData({...catData, catAge:e.target.value})}
          />
        </label>
        
        <input
          type="file"
          name="file"
          className="file-input file-input-bordered file-input-info w-full"
          onChange={handleChange}
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