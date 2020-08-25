import expressLoader from './express';
import mongooseLoader from './mongoose';
import Logger from './logger';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('MongoDB Initialized');
  
  await expressLoader({ app: expressApp });
  Logger.info('Express Initialized');

}