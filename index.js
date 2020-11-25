const express = require('express')
const app = express()
const car = require('./routers/car')
app.use(express.json())
app.use('/api/cars/', car)
const port = process.env.PORT || 3000
app.listen(port, () => { console.log('servidor funcionando en el puerto: ' + port) })

