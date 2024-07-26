const express = require("express");
const {
  addNewCat,
  editCat,
  deleteCat,
  addCatSupplies,
  getAllCats,
  getCatByName
} = require("../controllers/catController");
const router = express.Router();

router.post("/addNewCat", addNewCat);
router.get('/getAllCats', getAllCats)
router.get('/getCatByName/:catName' , getCatByName)
router.post("/edit/:catName", editCat);
router.delete("/delete/:catName", deleteCat);
router.post("/addSupplies", addCatSupplies);
module.exports = router;
