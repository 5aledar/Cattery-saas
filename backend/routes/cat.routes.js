<<<<<<< HEAD
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
=======
const express = require('express')
const { addNewCat, editCat, deleteCat , addCatSupplies , getAllCats} = require('../controllers/catController')
const router = express.Router()

router.post("/addNewCat", addNewCat)
router.get('/getAllCats', getAllCats)
router.post("/edit/:catId", editCat)
router.delete('/delete/:catId', deleteCat)

router.post('/addSupplies' , addCatSupplies)
module.exports = router
>>>>>>> 236e917377408d8c78481b1ae2dc8f5a7cab666b
