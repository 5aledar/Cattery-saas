const express = require('express')
const { addNewCat } = require('../controllers/catController')
const router = express.Router()

router.post("/addNewCat", addNewCat)

module.exports = router