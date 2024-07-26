const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const catRoutes = require('./routes/cat.routes')
const connectToMongoDB = require('./db/connectToMongoDB');
const consumptionRoutes = require('./routes/consumption.routes')
const cloudinary  = require('cloudinary')
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())
app.use('/cat', catRoutes)
app.use('/consumption', consumptionRoutes)
const port = process.env.PORT || 4000
console.log(port);
app.listen(port, () => {
    connectToMongoDB()
    console.log(`server is running on port ${port}`);
})