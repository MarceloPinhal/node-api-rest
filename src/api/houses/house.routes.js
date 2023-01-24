const express = require('express');
const controller = require('./house.controller');

const router = express.Router();

router.get('/', controller.getAllHouses);
router.get("/:id", controller.getHouseById);
router.post('/create', controller.createHouse);
router.put("/edit/:id", controller.editHouse);
router.delete("/delete/:id", controller.deleteHouse);


module.exports = router;