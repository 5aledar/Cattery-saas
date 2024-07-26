import React, { useState  , useEffect} from 'react'
import vaccinations from '../assets/vaccinations.jpg'
export const Vaccinations = () => {
  const [vaccin, setVaccin] = useState()
  const [vaccinDate, setVaccinDate] = useState(0)
  const getVaccinations = async () => {
    const res = await fetch('http://localhost:4000/consumption/getSupplies')
    const supplies = await res.json()
    setVaccin(supplies.medicine.vaccinations)
  }
  const getDates = async () =>{
    const res = await fetch('http://localhost:4000/consumption/getSupplyDate')
    const dates =await res.json()
    setVaccinDate(dates.vaccinations)
    
}
  useEffect(() => {
    getVaccinations()
    getDates()
  }, [])
  return (
    <div className="card bg-base-100 w-1/3  h-full shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={vaccinations}
          alt="Food"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          Vaccinations!
          <div className="badge badge-secondary">For your cats</div>
        </h2>
        <p>your vaccinations will be enough for {vaccinDate} days</p>
        <div className="card-actions justify-end">
          {/* <div className="badge badge-outline">+100 kg</div> */}
          <div className="badge badge-outline">+{vaccin} units</div>
        </div>
      </div>
    </div>
  )
}
