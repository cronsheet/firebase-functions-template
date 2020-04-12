import cors from 'cors';
import express from 'express';
import * as functions from 'firebase-functions';
import controller from './controller-https';

const app = express();
app.use(cors({ origin: '*' }));

export const webhooks = functions.https.onRequest(controller(app));