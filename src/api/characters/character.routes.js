
const express = require("express");
const controller = require("./character.controller")

const router = express.Router();


router.get("/", controller.getAllCharacters);


router.get("/:id", controller.getCharacterById);


router.post("/create", controller.createCharacter);


router.put("/edit/:id", controller.editCharacter);


router.delete("/delete/:id", controller. deleteCharacter);

module.exports = router;