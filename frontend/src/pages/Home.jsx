import React from 'react';
import img1 from '../assets/cats.jpg';
import { motion } from 'framer-motion';
import { Nav } from '../componants/Nav';
import { Fotter } from '../componants/Fotter'
import AboutUs from '../componants/AboutUs'
// import { CatAnimation } from './CatAnimation'
export const Home = () => {
  return (
    <>
      <Nav></Nav>
    <AboutUs/>

    {/* <CatAnimation></CatAnimation> */}
    <Fotter></Fotter>
    </>
  );
};
