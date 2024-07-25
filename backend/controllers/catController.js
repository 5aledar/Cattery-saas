const Cat = require('../models/catModel')

const addNewCat = async (req, res) => {
    try {
        const { catName, catAge, catWeight, catImage } = req.body
        if (!catName || !catAge || !catWeight || !catImage)
            return res.json("data is missing")
        const newCat = new Cat({
            catName: catName,
            catAge: catAge,
            catWeight: catWeight,
            catImage: catImage
        })
        newCat.save()
        res.status(201).json("new cat added")
    } catch (error) {

    }
}

module.exports = { addNewCat }