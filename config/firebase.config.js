const Firebase = require('firebase-admin');

const serviceAccount = require('../drive-f0d33-firebase-adminsdk-fbsvc-99f908f028.json');

const firebase = Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-f0d33.firebasestorage.app'
})

module.exports = Firebase;