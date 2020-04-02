if(process.env.NODE_ENV === "development") {
    console.log("HELLO");
    require("dotenv").config()
}
const express = require('express')
const app = express()
const PORT = process.env.PORT
const cors = require('cors')
const router = require('./routers/index.js')
const errorHandler = require('./middleware/errorHandler.js')

app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})