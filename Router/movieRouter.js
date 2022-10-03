const express = require('express');
const moviesController = require('../controller/moviesController')
const router = express.Router();

router.get('/',moviesController.movie_index);
router.get('/About',moviesController.movie_about);
router.get('/create',moviesController.movie_create);
router.get('/movies/:id',moviesController.movie_get);
router.post('/',moviesController.movie_post);
router.delete('/movies/:id', moviesController.movie_delete)

module.exports = router;