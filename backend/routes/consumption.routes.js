const express = require('express')
const router = express.Router()
const { getSupplyDate, getSupplies, updateSupllies } = require('../controllers/consumptionController')

router.get('/getSupplyDate', getSupplyDate)
router.get('/getSupplies', getSupplies)
router.post('/updateSupllies', updateSupllies)
module.exports = router