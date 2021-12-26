const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/moviesController');

router.post('/create', controller.create);
router.delete('/delete/:id', controller.destroy);

module.exports = router;