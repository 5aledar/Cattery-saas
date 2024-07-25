const Cat = require('../models/catModel')

const addNewCat = async (req, res) => {
    try {
        const { catName, catAge, catWeight, catImage } = req.body
        if (!catName || !catAge || !catWeight || !catImage)
            return res.json("data is missing")
        const existedCat = await Cat.findOne({ catName: catName })
        if (!existedCat) {

            const newCat = new Cat({
                catName: catName,
                catAge: catAge,
                catWeight: catWeight,
                catImage: catImage
            })
            await newCat.save()
            res.status(201).json("new cat added")
        } else {
            console.log(existedCat);
            return res.status(400).json("cat already exist")
        }
    } catch (error) {

    }
}

const editCat = async (req, res) => {
    try {
        const { catId } = req.params;
        const { catName, catAge, catWeight, catImage } = req.body;

        if (!catId || !catName || !catAge || !catWeight || !catImage)
            return res.json("data is missing");

        const cat = await Cat.findById(catId);
        if (!cat) {
            return res.status(404).json("cat not found");
        }

        cat.catName = catName;
        cat.catAge = catAge;
        cat.catWeight = catWeight;
        cat.catImage = catImage;

        await cat.save();
        res.status(200).json("cat updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).json("error updating cat");
    }
};

const deleteCat = async (req, res) => {
    try {
        const { catId } = req.params;

        if (!catId) {
            return res.json("catId is missing");
        }
        const cat = await Cat.findById({ _id: catId })
        if(!cat){
            return res.status(404).json("couldnt finnd cat")
        }
        const result = await Cat.deleteOne({ _id: catId });
        if (result.deletedCount === 0) {
            return res.status(404).json("cat not found");
        }

        res.status(200).json("cat deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).json("error deleting cat");
    }
};


module.exports = { addNewCat, editCat, deleteCat }