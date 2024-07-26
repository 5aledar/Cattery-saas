import React, { useState, useEffect } from "react";
import { GiWeight } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc";
import { IoSend } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

export const EditSupply = () => {
  const getSupplies = async () => {
    const res = await fetch('http://localhost:4000/consumption/getSupplies')
    const data = await res.json()
    console.log(data);
  }
  useEffect(()=>{
    getSupplies()
  })
  const [supliesData, setSupliesData] = useState({
    food: 0,
    medicine: {
      vaccinatins: 0
    },
    litter_and_hygiene: {
      litter_boxes: 0,
      litter: 0,
      cat_wipes: 0
    }
  })

  const handleSubmit = async () => {

  }

  return (
    
    <div className="w-1/2 m-auto h-full mt-32 flex flex-col gap-4">
      <h1 className="text-5xl font-bold text-center">Edit Your supply</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="input input-bordered flex items-center gap-2">
          Food
          <input
            type="number"
            name="Food"
            className="grow"
            placeholder="kg"
            // value={}
            onChange={(e) => setSupliesData({ ...supliesData, food: e.target.value })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <GiWeight className="h-7 w-8 opacity-70" />
          <input
            type="number"
            name="vaccination"
            className="grow"
            placeholder="unit"
            // value={catData.catWeight}
            onChange={(e) => setSupliesData({ ...supliesData, medicine: { vaccinatins: e.target.value } })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FcCalendar className="h-7 w-8 opacity-70" />
          <input
            type="number"
            name="litterBoxes"
            className="grow"
            placeholder="box"
            // value={catData.catAge}
            onChange={(e) => setSupliesData({ ...supliesData, litter_and_hygiene: { litter_boxes: e.target.value } })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FcCalendar className="h-7 w-8 opacity-70" />
          <input
            type="number"
            name="litter"
            className="grow"
            placeholder="kg"
            // value={catData.catAge}
            onChange={(e) => setSupliesData({ ...supliesData, litter_and_hygiene: { litter: e.target.value } })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FcCalendar className="h-7 w-8 opacity-70" />
          <input
            type="number"
            name="catWipes"
            className="grow"
            placeholder="wipe"
            // value={catData.catAge}
            onChange={(e) => setSupliesData({ ...supliesData, litter_and_hygiene: { cat_wipes: e.target.value } })}
          />
        </label>




        <div className="flex gap-2">
          <button
            type="submit"
            className={`btn btn-outline btn-info font-bold text-xl w-1/2 ${isLoading ? "loading" : ""
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