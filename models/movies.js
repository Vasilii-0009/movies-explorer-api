const mongoose = require('mongoose');
require('mongoose-type-url');

const moviesScheme = new mongoose.Schema({
  country: {
    type: String,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  duration: {
    type: Number,
    require: true,
  },
  year: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
  trailerLink: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
  thumbnail: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  nameRU: {
    type: String,
    require: true,
  },
  nameEN: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('movies', moviesScheme);
