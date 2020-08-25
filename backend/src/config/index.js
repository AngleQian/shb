const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// parse .env
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  debug: process.env.DEBUG || true,
  apiURL: process.env.API_URL || 'http://localhost:3000',
  corsOrigins: process.env.CORS_ORIGINS || 'http://localhost:8080',
  appSecret: process.env.APP_SECRET || 'xiaojuju',
  dbURL: process.env.MONGODB_URI || 'mongodb://localhost/shb',
  api: {
    prefix: '/api',
  },
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  }
}