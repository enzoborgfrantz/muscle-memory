import mongoose from 'mongoose';

export const startDatabase = async () => {
  mongoose.connect('mongodb://localhost/test');
  const database = mongoose.connection;
  database.on('error', () => console.error('Connection to database failed.'));
  database.once('open', () => console.log('Connected to database.'));
}
