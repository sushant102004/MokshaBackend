const { BMI } = require("./../models/bmi");
const fs = require("fs");

const calculateBMI = (req, res) => {
    console.log("Printed Data");
    const { height, weight } = req.query;

    if (height === undefined || weight === undefined) {
        res.status(400).json({
            error: "Please provide height and weight",
        });
    }

    const bmiModel = new BMI();
    const bmi = bmiModel.calculateBGMI(height, weight);

    if (bmi <= 18.5) {
        res.status(200).json({
            level: "Underweight",
            food: ["Cheese", "Nuts", "Milk", "Dry Fruits", "Tea"],
        });
        return
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        res.status(200).json({
            level: "Healthy Weight",
            food: ["Whole Grains", "Vegetables", "Fruits", "Beans", "Protien Sources"],
        })
        return
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        res.status(200).json({
            level: "Overweight",
            food: ["Fat Free Milk", "Grains", "Vegetables", "Fruits"],
        })
        return
    } else if (bim >= 30) {
        res.status(200).json({
            level: "Obesity",
            food: ["Oats", "Non-Potato Vegetables", "Protien", "Plant Oils"],
        })
        return
    } else {
        res.status(500).json({
            error: 'We are facing some issues while calculating your BMI'
        })
        return
    }
};

const internalServerError = (req, res) => {
    res.status(500).json({
        error: "Internal Server Error",
    });
    return;
};

module.exports = { calculateBMI };
