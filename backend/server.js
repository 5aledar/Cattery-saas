const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())


const port = process.env.PORT
console.log(port);

app.listen(port , () =>{
    console.log(`server is running on port ${port}`);
})