<<<<<<< HEAD
import React  , {useState} from "react";
=======
import React , {useState ,useEffect} from "react";
>>>>>>> f09f25ef60f9fea2c56d343454e285e12a81f342
import { Nav } from "../componants/Nav";
import { Sypplies } from "../componants/Sypplies";
import { Vaccinations } from "../componants/Vaccinations";
import { Litters } from '../componants/Litters'
import CompositionExample from "../componants/CompositionExample";
// import { Chars } from '../componants/Chars'
export const ResourceCalculator = () => {
  const [foodDays, setFoodDays] = useState(0)
  const [vaccinDays, setVaccinDays] = useState(0)
  const [litterDays, setlitterDays] = useState(0)
  const getDates = async () =>{
    const res = await fetch('http://localhost:4000/consumption/getSupplyDate')
    const dates =await res.json()
    console.log(dates);
    setFoodDays(dates.food)
    setVaccinDays(dates.vaccinations)
    setlitterDays(dates.litter)
}
useEffect(()=>{
  getDates()
},[])
  return (
    <>
      <Nav></Nav>
      <div className=" m-auto h-full mt-10  flex  gap-4 justify-around">
        <Sypplies></Sypplies>
        <Vaccinations></Vaccinations>
        <Litters></Litters>
        {/* <Chars></Chars> */}
      </div>
      <div className="w-full flex justify-cente" ><CompositionExample val={foodDays}></CompositionExample><CompositionExample val={vaccinDays}></CompositionExample><CompositionExample val={litterDays}></CompositionExample></div>
    </>
  );
};
