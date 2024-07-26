const Cat = require('../models/catModel')
const Supply = require('../models/supplyModel')

const getSupplyDate = async (req, res) => {
    const cats = await Cat.find()
    let foodRate = 0
    let vacRate = 0
    let litRate = 0
    let litBoxRate = 0
    let catWipesRate = 0
    for (let i = 0; i < cats.length; i++) {

        if (cats[i].catAge < 1) {
            foodRate += 0.05
        } else if (cats[i].catAge > 1 && cats[i].catAge < 7) {

            foodRate += 0.12
        } else if (cats[i].catAge > 8) {
            foodRate += 0.09
        }
    }
    for (let j = 0; j < cats.length; j++) {
        if (cats[j].catAge < 1) {
            vacRate += 2
        } else if (cats[j].catAge > 1) {
            vacRate += 1
        }

    }
    for (let k = 0; k < cats.length; k++) {
        if (cats[k].catAge > 1) {
            litRate += 0.4
        } else if (cats[k].catAge >= 1 && ctas[k].catAge < 3) {
            litRate += 3
        } else if (cats[k].catAge >= 3) {
            litRate += 5
        }

    }
    for (let l = 0; l < cats.length; l++) {
        if (cats[l].catAge < 1) {
            litBoxRate += 0.5
        } else if (cats[l].catAge > 1) {
            litBoxRate += 1
        }
    }
    for (let m = 0; m < cats.length; m++) {
        if (cats[m].catAge < 1) {
            catWipesRate += 4
        } else if (cats[m].catAge > 1) {
            catWipesRate += 1.5
        }

    }

    const supplies = await Supply.find()
    const food = supplies[0].food
    const vaccinations = supplies[0].medicine.vaccinations
    const litters = supplies[0].litter_and_hygiene.litter
    const litterBoxes = supplies[0].litter_and_hygiene.litter_boxes
    const catWipes = supplies[0].litter_and_hygiene.cat_wipes
    // console.log(vaccinations);
    const foodDays = food / foodRate
    const vacDays = vaccinations / vacRate
    const litDays = litters / litRate
    const litBoxDays = litterBoxes / litBoxRate
    const catWipesDays = catWipes / catWipesRate
    const days = {
        food: Math.round(foodDays),
        vaccinations: Math.round(vacDays),
        litterBoxes: Math.round(litBoxDays),
        litter: Math.round(litDays),
        catWipes: Math.round(catWipesDays)
    }
    res.status(200).json(days)
}

const getSupplies = async (req, res) => {
    const supplies =await Supply.find()
    res.json(supplies[0])
}

module.exports = { getSupplyDate, getSupplies }