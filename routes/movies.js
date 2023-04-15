const { celebrate, Joi } = require('celebrate');
const router = require('express').Router();

const { createMovies, getMovies, deleteMovies } = require('../controllers/movies');

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    trailerLink: Joi.string().required(),
    thumbnail: Joi.string().required(),
    movieId: Joi.string().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), createMovies);

router.get('/me', getMovies);

router.delete('/:_id', deleteMovies);

module.exports = router;
