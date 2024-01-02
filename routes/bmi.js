const express = require('express')
const { calculateBMI } = require('./../controllers/bmi')


const router = express.Router()

router.get('/', calculateBMI)

module.exports = router