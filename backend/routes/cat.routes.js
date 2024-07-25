const express = require('express')
const { addNewCat, editCat, deleteCat , addCatSupplies , getAllCats} = require('../controllers/catController')
const router = express.Router()

router.post("/addNewCat", addNewCat)
router.get('/getAllCats', getAllCats)
router.post("/edit/:catId", editCat)
router.delete('/delete/:catId', deleteCat)

router.post('/addSupplies' , addCatSupplies)
module.exports = router