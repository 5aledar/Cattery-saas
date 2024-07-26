const Cat = require("../models/catModel");
const Supply = require("../models/supplyModel");
const cloudinary = require("cloudinary").v2;
const addNewCat = async (req, res) => {
  try {
    const { catName, catAge, catWeight } = req.body;
    let { catImage } = req.body;

    console.log("Received data:", req.body);

    if (!catName || !catAge || !catWeight || !catImage) {
      return res.status(400).json("data is missing");
    }

    const existedCat = await Cat.findOne({ catName });
    if (!existedCat) {
      if (catImage) {
        const result = await cloudinary.uploader.upload(catImage);
        catImage = result.secure_url;
      }

      const newCat = new Cat({
        catName,
        catAge,
        catWeight,
        catImage,
      });

      await newCat.save();
      res.status(201).json("new cat added");
    } else {
      console.log("Cat already exists:", existedCat);
      return res.status(400).json("cat already exist");
    }
  } catch (error) {
    console.error("Error adding new cat:", error);
    res.status(500).json({ "Internal server error": error.message });
  }
};

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

const getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find();
    res.status(200).json(cats);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteCat = async (req, res) => {
  try {
    const { catName } = req.params;

    if (!catName) {
      return res.json("catId is missing");
    }
    const cat = await Cat.findOne({ catName: catName });
    if (!cat) {
      return res.status(404).json("couldnt finnd cat");
    }
    const result = await Cat.deleteOne({ catName: catName });
    if (result.deletedCount === 0) {
      return res.status(404).json("cat not found");
    }

    res.status(200).json("cat deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json("error deleting cat");
  }
};

const getCatByName = async (req, res) => {
  const { catName } = await req.params;
  const cat = await Cat.findOne({ catName: catName });
  if (!cat) {
    return res.status(404).json("cat nout found");
  }
  res.status(200).json(cat);
};

const addCatSupplies = async (req, res) => {
  try {
    const { food, medicine, litter_and_hygiene } = req.body;
    const newSupply = new Supply({
      food: food,
      medicine: medicine,
      litter_and_hygiene: litter_and_hygiene,
    });
    await newSupply.save();
    res.status(201).json("supplies added");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addNewCat,
  editCat,
  deleteCat,
  addCatSupplies,
  getAllCats,
  getCatByName,
};
