import React, { useState, useEffect } from "react";
import { Nav } from "../componants/Nav";
import { Sypplies } from "../componants/Sypplies";
import { Vaccinations } from "../componants/Vaccinations";
import { Litters } from "../componants/Litters";
import CompositionExample from "../componants/CompositionExample";
// import { Chars } from '../componants/Chars'
export const ResourceCalculator = () => {
  const [foodDays, setFoodDays] = useState(0);
  const [vaccinDays, setVaccinDays] = useState(0);
  const [litterDays, setlitterDays] = useState(0);
  const getDates = async () => {
    const res = await fetch("http://localhost:4000/consumption/getSupplyDate");
    const dates = await res.json();
    console.log(dates);
    setFoodDays(dates.food);
    setVaccinDays(dates.vaccinations);
    setlitterDays(dates.litter);
  };
  useEffect(() => {
    getDates();
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className=" m-auto h-full mt-10  flex  gap-4 justify-around">
        <Sypplies></Sypplies>
        <Vaccinations></Vaccinations>
        <Litters></Litters>
        {/* <Chars></Chars> */}
      </div>
      <div className="w-full flex justify-cente">
        <CompositionExample val={foodDays} type={"Food"}></CompositionExample>
        <CompositionExample val={vaccinDays} type={"Vaccin"}></CompositionExample>
        <CompositionExample val={litterDays} type={"Litter"}></CompositionExample>
      </div>
    </>
  );
};
