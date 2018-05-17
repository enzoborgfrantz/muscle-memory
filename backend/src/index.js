import 'babel-polyfill';
import { startServer } from './server';
import { startDatabase } from './database';
import fetch from 'node-fetch';

global.fetch = fetch;
startServer();
startDatabase();
