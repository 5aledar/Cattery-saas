import React from "react";
import { Nav } from "../componants/Nav";
import { Fotter } from "../componants/Fotter";
import AboutUs from "../componants/AboutUs";
import img1 from '../assets/cats.jpg';
import { motion } from 'framer-motion';
// import { CatAnimation } from './CatAnimation'
export const Home = () => {
  return (
    <>
      <Nav></Nav>
      <AboutUs />
      <Fotter></Fotter>
    </>
  );
};

