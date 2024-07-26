const express = require("express");
const {
  addNewCat,
  editCat,
  deleteCat,
  getDailyConsumption,
  addCatSupplies,
} = require("../controllers/catController");
const router = express.Router();

router.post("/addNewCat", addNewCat);
router.post("/edit/:catId", editCat);
router.delete("/delete/:catId", deleteCat);
router.get("/getDailyCunsomption", getDailyConsumption);
router.post("/addSupplies", addCatSupplies);
module.exports = router;
