import React from "react";
import { Nav } from "../componants/Nav";
import { Sypplies } from "../componants/Sypplies";
import { Vaccinations } from "../componants/Vaccinations";
import { Litters } from '../componants/Litters'
import CompositionExample from "../componants/CompositionExample";
// import { Chars } from '../componants/Chars'
export const ResourceCalculator = () => {
  return (
    <>
      <Nav></Nav>
      <div className=" m-auto h-full mt-10  flex  gap-4 justify-around">
        <Sypplies></Sypplies>
        <Vaccinations></Vaccinations>
        <Litters></Litters>
        {/* <Chars></Chars> */}
      </div>
      <div className="w-full flex justify-cente" ><CompositionExample ></CompositionExample><CompositionExample ></CompositionExample><CompositionExample ></CompositionExample></div>
    </>
  );
};
