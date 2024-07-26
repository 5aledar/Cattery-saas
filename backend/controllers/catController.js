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
    const { catname: originalCatName } = req.params;
    const { catName, catAge, catWeight, catImage } = req.body;
    console.log( catName, catAge, catWeight, catImage );
    
    console.log("Received data:", req.body);

    // Check for missing data
    if (!catName || !catAge || !catWeight) {
      return res.status(400).json("data is missing");
    }

    // Find the existing cat by the original name
    const existingCat = await Cat.findOne({ catName: originalCatName });
    if (!existingCat) {
      return res.status(404).json("cat not found");
    }

    // Handle image upload if a new image is provided
    let updatedCatImage = existingCat.catImage; // Keep the existing image if not updated
    if (catImage) {
      const result = await cloudinary.uploader.upload(catImage);
      updatedCatImage = result.secure_url;
    }

    // Update the cat's information
    const updatedCat = await Cat.findOneAndUpdate(
      { catName: originalCatName },
      {
        catName, // Update name if changed
        catAge,
        catWeight,
        catImage: updatedCatImage,
      },
      { new: true } // Return the updated document
    );

    if (!updatedCat) {
      return res.status(404).json("failed to update cat");
    }

    console.log("Cat updated:", updatedCat);
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
      return res.json("catName is missing");
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
  const { catname } = await req.params;
  const cat = await Cat.findOne({ catName: catname });
  // console.log(cat,"========");
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
