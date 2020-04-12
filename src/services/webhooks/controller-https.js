import admin from 'firebase-admin';
import { SERVICE_NAME } from './constants';

// const collection = admin.firestore().collection(SERVICE_NAME);

async function createWebhook (req, res) {
  res.status(200).send('create');
}

async function updateWebhook (req, res) {
  res.status(200).send('update');
}

async function findWebhooks (req, res) {
  res.status(200).send('find');
}

async function getWebhook (req, res) {
  res.status(200).send('get');
}

async function deleteWebhook (req, res) {
  res.status(200).send('delete');
}

export default (app) => {
  app.post('/', createWebhook);
  app.put('/:id', updateWebhook);
  app.get('/', findWebhooks);
  app.get('/:id', getWebhook);
  app.delete('/:id', deleteWebhook);
  return app;
};