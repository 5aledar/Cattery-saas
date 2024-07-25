const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({

    //   cat: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    catName: { type: String, required: true, unique: true },
    catAge: { type: Number, required: true },
    catWeight: { type: Number, required:true },
    catImage: { type: String, require: true }
});

module.exports = mongoose.model('Cat', catSchema);