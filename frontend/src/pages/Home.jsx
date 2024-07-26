import React from 'react';
import img1 from '../assets/cats.jpg';
import { motion } from 'framer-motion';
import { Nav } from '../componants/Nav';
import {Fotter} from '../componants/Fotter'
export const Home = () => {
  return (
    <>
    <Nav></Nav>
    <section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="relative bg-white"
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="w-full bg-white flex flex-row">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          className="w-1/2 flex items-center justify-center"
        >
          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
                className="text-3xl font-extrabold sm:text-5xl"
              >
                Let us find the best care
                <strong className="block font-extrabold text-blue-600"> For your cats </strong>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.1, ease: 'easeInOut' }}
                className="mt-4 max-w-lg sm:text-xl/relaxed"
              >
                Cats intend to teach us that not everything in nature has a purpose - Garrison Keillor
              </motion.p>
              <div className="mt-8 flex flex-wrap gap-4 text-center justify-center items-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  show dashboard
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
        <div
          className="w-1/2 h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: 'center',
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </section>
    <Fotter></Fotter>
    </>
  );
};
