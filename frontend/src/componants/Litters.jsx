import React, { useState, useEffect } from 'react'
import litterBox from '../assets/litterBox.jpg'
export const Litters = () => {
    const [litter, setLitter] = useState(0)
    const [litterBoxes, setLitterBoxes] = useState(0)
    const [wipes, setWipes] = useState(0)
    const [boxesDate, setBoxesDate] = useState(0)
    const [litterDate, setLitterDate] = useState(0)
    const [wipesDate, setWipesDate] = useState(0)
    const getLitter = async () => {
        const res = await fetch('http://localhost:4000/consumption/getSupplies')
        const supplies = await res.json()
        setLitter(supplies.litter_and_hygiene.litter)
        setLitterBoxes(supplies.litter_and_hygiene.litter_boxes)
        setWipes(supplies.litter_and_hygiene.cat_wipes)
    }
    const getDates = async () =>{
        const res = await fetch('http://localhost:4000/consumption/getSupplyDate')
        const dates =await res.json()
        setBoxesDate(dates.litterBoxes)
        setLitterDate(dates.litter)
        setWipesDate(dates.catWipes)
    }
    useEffect(() => {
        getDates()
        getLitter()
        
    }, [])
    return (
        <div className="card bg-base-100 w-1/3  h-full shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={litterBox}
                    alt="litter"
                />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">
                    Sypplies!
                    <div className="badge badge-secondary">For your cats</div>
                </h2>
                <p>litter boxes: {boxesDate} days<br/>litter: {litterDate} days<br/>wipes: {wipesDate} days</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">+{litterBoxes} box</div>
                    <div className="badge badge-outline">+{litter} kg</div>
                    <div className="badge badge-outline">+{wipes} wipes</div>
                    {/* <div className="badge badge-outline">+100 vaccinations</div> */}
                </div>
            </div>
        </div>
    )
}

