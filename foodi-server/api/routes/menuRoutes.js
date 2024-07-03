const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

const { getAllMenuItems } = require("../controllers/menuControllers");

// get all menu items
router.get("/", getAllMenuItems);

module.exports = router;
