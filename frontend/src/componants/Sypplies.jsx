import React from "react";
import Food2 from '../assets/food2.jpg';
export const Sypplies = () => {
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
            Sypplies!
            <div className="badge badge-secondary">For your cats</div>
          </h2>
          <p>your food will be enough for one year</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">+100 kg</div>
            {/* <div className="badge badge-outline">+100 vaccinations</div> */}
          </div>
        </div>
      </div>
  );
};
