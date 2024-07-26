import React  , {useState , useEffect} from "react";
import { motion } from "framer-motion";
import Food2 from '../assets/food2.jpg';

export const Sypplies = () => {
  const [food, setFood] = useState(0)
  const [foodDate, setFoodDate] = useState(0)
  const getFood = async () => {
    const res = await fetch('http://localhost:4000/consumption/getSupplies')
    const supplies = await res.json()
    setFood(supplies.food)
  }
  const getDates = async () =>{
    const res = await fetch('http://localhost:4000/consumption/getSupplyDate')
    const dates =await res.json()
    setFoodDate(dates.food)
    
}
  useEffect(() => {
    getDates()
    getFood()
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
        <img src={Food2} alt="Food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Food!
          <div className="badge badge-secondary bg-blue-600 border-blue-600 p-3">For your cats</div>
        </h2>
        <p>Your food will be enough for {foodDate} days</p>
        <div className="card-actions justify-end">
          <motion.div className="badge badge-outline">+{food} kg</motion.div>
         
        </div>
      </div>
    </motion.div>
  );
};
  