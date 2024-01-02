const express = require('express')
const bmiRouter = require('./routes/bmi')


const app = express()

app.use('/bmi', bmiRouter)

app.listen(3000, () => {
    console.log('listening on port 3000')
})