// Cargamos el módulo de mongoose
const mongoose = require("mongoose");
// Definimos los esquemas
const Schema = mongoose.Schema;
// Creamos el objeto del esquema con sus correspondientes campos
const CharacterSchema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      gender: {
        type: String,
      },
      born: {
        type: String
      },
      origin: {
        type: String
      },
      death: {
        type: String
      },
      status: {
        type: String,
      },
      culture: {
        type: String,
      },
      religion: {
      type: String
      },
      titles: {
        type: [String]
      },
      house: {
        type: String,
        required: true
      },
    },
  { timestamps: true }
);
// Exportamos el modelo para usarlo en otros ficheros
const Character = mongoose.model("characters",CharacterSchema);
module.exports = Character;