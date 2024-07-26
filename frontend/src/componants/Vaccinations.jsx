import React from 'react';
import { motion } from 'framer-motion';
import vaccinations from '../assets/vaccinations.jpg';

export const Vaccinations = () => {
  return (
    <motion.div
      className="card bg-base-100 w-1/3 h-full shadow-xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <figure className="px-10 pt-10">
        <img src={vaccinations} alt="Vaccinations" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Vaccinations!
          <div className="badge badge-secondary">For your cats</div>
        </h2>
        <p>Your vaccinations will be enough for one year</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">+100 vaccinations</div>
        </div>
      </div>
    </motion.div>
  );
};
