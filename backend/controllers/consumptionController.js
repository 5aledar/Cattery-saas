const Cat = require('../models/catModel')
const Supply = require('../models/supplyModel')

const getSupplyDate = async (req, res) => {
    const cats = await Cat.find()
    let rate = 0
    for (let i = 0; i < cats.length; i++) {

        if (cats[i].catAge < 1) {
            rate += 0.05
        } else if (cats[i].catAge > 1 && cats[i].catAge < 7) {

            rate += 0.12
        } else if (cats[i].catAge > 8) {
            rate += 0.09
        }
        console.log(rate);
    }
    const supplies = await Supply.find()
    const food = supplies[0].food
    const days = food/ rate
    res.json(days)
}

module.exports = { getSupplyDate }