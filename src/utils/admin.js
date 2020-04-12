import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey';
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pet-tag.firebaseio.com',
});
