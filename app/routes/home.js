const express = require('express');
const router = express.Router();

//arrow function
router.get('/', (req, res) => {
	res.render("home/index");
});

module.exports = router;