require('dotenv').config({ path: './.env' });

const { NODE_ENV } = process.env;
const { JWT_SECRET = 'ec7100f6ed6406a56ad00e8eb8cc6caf9fd54165dc181834872d748707d883f9' } = process.env;

module.exports = {
  NODE_ENV,
  JWT_SECRET,
};
