import admin from 'firebase-admin';

/**
 * @returns {String}
 */
export function generateId () {
  return admin.firestore().collection('collection').doc().id;
}
