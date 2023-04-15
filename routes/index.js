const { celebrate, Joi } = require('celebrate');
const router = require('express').Router();
const { creatUser, loginUser } = require('../controllers/users');
const userRouter = require('./users');
const moviesRouter = require('./movies');
const authorization = require('../middlewares/auth');
const NotFoundError = require('../utils/not-found-err');

router.use('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), creatUser);

router.use('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), loginUser);

router.use(authorization);

router.use('/users', userRouter);
router.use('/movies', moviesRouter);
router.use((req, res, next) => {
  next(new NotFoundError('запрос по несуществующиму адресу'));
});

module.exports = router;
