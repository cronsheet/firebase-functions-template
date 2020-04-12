import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey';
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://webhook-sandbox.firebaseio.com',
});
