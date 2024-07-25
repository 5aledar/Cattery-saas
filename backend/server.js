const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const catRoutes = require('./routes/cat.routes')
const connectToMongoDB = require('./db/connectToMongoDB');

dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())
app.use('/cat' , catRoutes)

const port = process.env.PORT ||4000



app.listen(port , () =>{
    connectToMongoDB()
    console.log(`server is running on port ${port}`);
})