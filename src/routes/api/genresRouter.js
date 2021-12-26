const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/genresController');

router.post('/genres', controller.list);
router.post('/genres/detail/:id', controller.detail);

module.exports = router;