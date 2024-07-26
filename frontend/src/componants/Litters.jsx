import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import litterBox from '../assets/litterBox.jpg'

export const Litters = () => {
    const [litter, setLitter] = useState(0)
    const [litterBoxes, setLitterBoxes] = useState(0)
    const [wipes, setWipes] = useState(0)
    const [boxesDate, setBoxesDate] = useState(0)
    const [litterDate, setLitterDate] = useState(0)
    const [wipesDate, setWipesDate] = useState(0)

    const getLitter = async () => {
        const res = await fetch('http://localhost:4000/consumption/getSupplies')
        const supplies = await res.json()
        setLitter(supplies.litter_and_hygiene.litter)
        setLitterBoxes(supplies.litter_and_hygiene.litter_boxes)
        setWipes(supplies.litter_and_hygiene.cat_wipes)
    }

    const getDates = async () => {
        const res = await fetch('http://localhost:4000/consumption/getSupplyDate')
        const dates = await res.json()
        setBoxesDate(dates.litterBoxes)
        setLitterDate(dates.litter)
        setWipesDate(dates.catWipes)
    }

    useEffect(() => {
        getDates()
        getLitter()
    }, [])

    return (
        <motion.div
            className="card bg-base-100 w-[340px] h-[380px] shadow-xl mb-9"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <figure className="px-10 pt-10">
                <motion.img
                    src={litterBox}
                    alt="litter"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
            </figure>
            <div className="card-body">
                <motion.h2
                    className="card-title"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Supplies!
                    <div className="badge badge-secondary bg-blue-600 border-blue-600 p-3">For your cats</div>
                </motion.h2>
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
                >
                    Litter boxes: {boxesDate} days, litter: {litterDate} days, wipes: {wipesDate} days
                </motion.p>
                <div className="card-actions justify-end">
                    <motion.div
                        className="badge badge-outline"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
                    >
                        +{litterBoxes} box
                    </motion.div>
                    <motion.div
                        className="badge badge-outline"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
                    >
                        +{litter} kg
                    </motion.div>
                    <motion.div
                        className="badge badge-outline"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
                    >
                        +{wipes} wipes
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
