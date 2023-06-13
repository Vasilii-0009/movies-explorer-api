const allowedCors = [
  'http://api.my-movies.nomoredomains.monster',
  'https://api.my-movies.nomoredomains.monster',
  'https://my-movies-top.nomoredomains.rocks',
  'http://my-movies-top.nomoredomains.rocks',
  'localhost:3000',
  'localhost:3000',
];

const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-type', 'origin', 'Authorization'],
  preflightContinue: false,
};

module.exports = corsOptions;
