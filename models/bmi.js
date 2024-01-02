class BMI {
    calculateBGMI(height, weight) {
        const heightInMeters = height / 100
        return weight / (heightInMeters * heightInMeters)
    }
}

module.exports = { BMI }