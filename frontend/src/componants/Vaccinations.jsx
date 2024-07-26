import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import vaccinations from '../assets/vaccinations.jpg'

export const Vaccinations = () => {
  const [vaccin, setVaccin] = useState(0)
  const [vaccinDate, setVaccinDate] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  const getVaccinations = async () => {
    const res = await fetch('http://localhost:4000/consumption/getSupplies')
    const supplies = await res.json()
    setVaccin(supplies.medicine.vaccinations)
  }

  const getDates = async () => {
    const res = await fetch('http://localhost:4000/consumption/getSupplyDate')
    const dates = await res.json()
    setVaccinDate(dates.vaccinations)
  }

  useEffect(() => {
    getVaccinations()
    getDates()
  }, [])

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 500) // Reset the click state after animation
  }

  return (
    <motion.div
      className="card bg-base-100 w-[340px] h-[380px] shadow-xl mb-9"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <figure className="px-10 pt-10">
        <motion.img
          src={vaccinations}
          alt="Vaccinations"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Vaccinations!
          <div className="badge badge-secondary bg-blue-600 border-blue-600 p-3">For your cats</div>
        </h2>
        <motion.p
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Your vaccinations will be enough for {vaccinDate} days
        </motion.p>
        <div className="card-actions justify-end">
          <motion.div
            className="badge badge-outline"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            +{vaccin} units
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
