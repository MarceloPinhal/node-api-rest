
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HouseSchema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      famousWords: {
        type: String,
        required: true
      },
      region: {
        type: String,
        required: true
      },
      characters:[{type: mongoose.Types.ObjectId, ref:"characters"}],
      founder: {
        type: String
      },
      vassals:[{type: mongoose.Types.ObjectId, ref:"characters"}],
},
  { timestamps: true }
);

const House = mongoose.model("houses",HouseSchema);
module.exports = House;