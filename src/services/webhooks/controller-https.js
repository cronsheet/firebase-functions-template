import admin from 'firebase-admin';
import { SERVICE_NAME } from './constants';
import * as utils from '../../utils';
const collection = admin.firestore().collection(SERVICE_NAME);

async function createWebhook (req, res, next) {
  try {
    await collection.add(req.body);
    res.status(200).send('create');
  } catch (e) {
    next(e);
  }
}

async function updateWebhook (req, res, next) {
  res.status(200).send('update');
}

async function findWebhooks (req, res, next) {
  try {
    const snapshot = await collection.get();
    const data = [];
    snapshot.forEach(snap => data.push({ ...snap.data(), id: snap.id }));
    // const data = snap.map(item => item.data())
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
}

async function getWebhook (req, res, next) {
  try {
    const id = req.params.id;
    const data = await collection.doc(id).get();
    if (data.exists) {
      res.status(200).json(data.data());
    } else {
      utils.errorHandler(res, { status: 404, message: `Document ${id} does not exist.` });
    }
  } catch (e) {
    next(e);
  }
}

async function deleteWebhook (req, res, next) {
  try {
    const id = req.params.id;
    await collection.doc(id).delete();
    res.status(200).json({ message: `${id} deleted!` });
  } catch (e) {
    next(e);
  }
}

export default (app) => {
  app.post('/', createWebhook);
  app.put('/:id', updateWebhook);
  app.get('/', findWebhooks);
  app.get('/:id', getWebhook);
  app.delete('/:id', deleteWebhook);
  return app;
};