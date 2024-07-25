const express = require('express')
const { addNewCat , editCat , deleteCat} = require('../controllers/catController')
const router = express.Router()

router.post("/addNewCat", addNewCat)
router.post("/edit/:catId", editCat)
router.delete('/delete/:catId' , deleteCat)
module.exports = router