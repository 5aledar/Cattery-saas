const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectToMongoDB = require('./db/connectToMongoDB');
dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())


const port = process.env.PORT || 4000
console.log(port);

app.listen(port , () =>{
    connectToMongoDB()
    console.log(`server is running on port ${port}`);
})