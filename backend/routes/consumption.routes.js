const express = require('express')
const router = express.Router()
const { getSupplyDate } = require('../controllers/consumptionController')

router.get('/getSupplyDate', getSupplyDate)

module.exports = router