const { celebrate, Joi } = require('celebrate');
const router = require('express').Router();
const { RegularForLink, RegularForEnLang, RegularForRuLang } = require('../utils/variables');
const { createMovies, getMovies, deleteMovies } = require('../controllers/movies');

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(RegularForLink),
    trailerLink: Joi.string().required().pattern(RegularForLink),
    thumbnail: Joi.string().required().pattern(RegularForLink),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().pattern(RegularForRuLang),
    nameEN: Joi.string().required().pattern(RegularForEnLang),
  }),
}), createMovies);

router.get('/', getMovies);

router.delete('/:_id', deleteMovies);

module.exports = router;
