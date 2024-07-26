import React from "react";
import { Nav } from "../componants/Nav";
import { Sypplies } from "../componants/Sypplies";
import { Vaccinations } from "../componants/Vaccinations";
import CompositionExample from "../componants/CompositionExample";
// import { Chars } from '../componants/Chars'
export const ResourceCalculator = () => {
  return (
    <>
      <Nav></Nav>
      <div className=" m-auto h-full mt-10 w-full flex  gap-4 justify-around">
        <Sypplies></Sypplies>
        <Vaccinations></Vaccinations>
        {/* <Chars></Chars> */}
      </div>
      <CompositionExample></CompositionExample>
    </>
  );
};
