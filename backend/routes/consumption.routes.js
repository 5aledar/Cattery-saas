const express = require('express')
const router = express.Router()
const { getSupplyDate  , getSupplies} = require('../controllers/consumptionController')

router.get('/getSupplyDate', getSupplyDate)
router.get('/getSupplies' , getSupplies)
module.exports = router