const express = require('express');
const coffeeController = require('../controllers/coffee_controller');
const router = new express.Router();

router.get('/coffee', coffeeController.getCoffee);
router.get('/coffeeLover', coffeeController.coffeeLover);

module.exports = router;