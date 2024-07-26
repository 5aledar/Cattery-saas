const mongoose = require("mongoose");
const supplySchema = new mongoose.Schema({
  food: {
    type: Number,
    required: true,
  },
  medicine: {
    vaccinations: {
      type: Number,
      required: true,
    },
  },
  litter_and_hygiene: {
    litter_boxes: {
      type: Number,
      required: true,
    },
    litter: {
      type: Number,
      required: true,
    },
    cat_wipes: {
      type: Number,
      required: true,
    },
  },
});

module.exports = mongoose.model("Supply", supplySchema);
