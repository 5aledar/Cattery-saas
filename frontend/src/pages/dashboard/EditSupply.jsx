import React, { useState } from "react";
import { GiWeight } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc";
import { IoSend } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

export const EditSupply = () => {
    
    const getSupplies = async () =>{
        const res = await fetch('http://localhost:4000/consumption/getSupplies')
        const data = await res.json()
        
    }   
    const handleSubmit  = () =>{

    }
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
                        value={'name'}
                        onChange={''}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <GiWeight className="h-7 w-8 opacity-70" />
                    <input
                        type="text"
                        className="grow"
                        placeholder="Weight"
                        value={'weight'}
                        onChange={''}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <FcCalendar className="h-7 w-8 opacity-70" />
                    <input
                        type="number"
                        className="grow"
                        placeholder="Age"
                        value={'age'}
                        onChange={'(e) => setAge(e.target.value)'}
                    />
                </label>
                <input
                    type="file"
                    className="file-input file-input-bordered file-input-info w-full"
                    onChange={''}
                />

                <div className="flex gap-2">
                    <button
                        type="submit"
                        className={`btn btn-outline btn-info font-bold text-xl w-1/2 `}
                    >

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
    )
}

