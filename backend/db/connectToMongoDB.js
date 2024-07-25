const mongoose = require('mongoose')

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Cattery_saas')
        console.log('connected to MongoDB');
    } catch (error) {
        console.log('error connecting to database' , error.message);
    }
}

module.exports = connectToMongoDB