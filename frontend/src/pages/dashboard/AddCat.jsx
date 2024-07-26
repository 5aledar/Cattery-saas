import { GiWeight } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc";
import { IoSend } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export function AddCat() {
  const [catData, setCatData] = useState({
    catName: "",
    catAge: 0,
    catWeight: 0,
    catImage: 0,
  })
  return (
    <>
    <form>

      <div className="w-1/2 m-auto h-full mt-32 flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-center">Add new cat</h1>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Enter cat name" />
        </label>
        <label className="input input-bordered flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-7 w-8 opacity-70"
            >
            <GiWeight className="" />
          </svg>
          <input type="text" className="grow" placeholder="wight" />
        </label>
        <label className="input input-bordered flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-7 w-8 opacity-70"
            >
            <FcCalendar />
          </svg>
          <input type="number" className="grow" placeholder="Age" />
        </label>
        <input
          type="file"
          className="file-input file-input-bordered file-input-info w-full "
          />
        <div className="flex gap-2">
        <button className="btn btn-outline btn-info font-bold text-xl w-1/2">
          submit<IoSend className="text-xl"></IoSend>
        </button>
        <Link className="w-full" to='/dashboard'>
        <button className="btn btn-outline btn-info font-bold text-xl w-full">
          back <BiArrowBack></BiArrowBack>
        </button>
        </Link>
        </div>
      </div>
          </form>
    </>
  );
}
