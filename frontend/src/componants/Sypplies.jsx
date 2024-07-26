import React, { useState, useEffect } from "react";
import Food2 from '../assets/food2.jpg';
export const Sypplies = () => {
  const [food, setFood] = useState(0)
  const [foodDate, setFoodDate] = useState(0)
  const getFood = async () => {
    const res = await fetch('http://localhost:4000/consumption/getSupplies')
    const supplies = await res.json()
    setFood(supplies.food)
  }
  const getDates = async () =>{
    const res = await fetch('http://localhost:4000/consumption/getSupplyDate')
    const dates =await res.json()
    setFoodDate(dates.food)
    
}
  useEffect(() => {
    getDates()
    getFood()
  }, [])
  return (
    <div className="card bg-base-100 w-1/3  h-full shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={Food2}
          alt="Food"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          Food!
          <div className="badge badge-secondary">For your cats</div>
        </h2>
        <p>cattery food will be enough for {foodDate} days</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">+{food} kg</div>
          {/* <div className="badge badge-outline">+100 vaccinations</div> */}
        </div>
      </div>
    </div>
  );
};
