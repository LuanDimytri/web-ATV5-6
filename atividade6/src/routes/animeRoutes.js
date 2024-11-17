const express = require('express');
const router = express.Router();
const AnimeController = require('../controllers/animeController');

router.post('/anime', AnimeController.create);
router.get('/anime', AnimeController.findAll);
router.get('/anime/:id', AnimeController.findById);
router.put('/anime/:id', AnimeController.update);
router.delete('/anime/:id', AnimeController.delete);

module.exports = router;
