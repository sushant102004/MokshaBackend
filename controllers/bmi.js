const { BMI } = require('./../models/bmi')

const calculateBMI = (req, res) => {
    const { height, weight } = req.query

    if (height === undefined || weight === undefined) {
        res.status(400).json({
            error : 'Please provide height and weight'
        })
    }

    const bmiModel = new BMI()
    const bmi = bmiModel.calculateBGMI(height, weight)

    res.status(200).json({
        'bmi' : bmi
    })
}

module.exports = { calculateBMI }