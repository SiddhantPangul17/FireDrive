const { credential } = require('firebase-admin');
const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-f0d33-firebase-adminsdk-fbsvc-99f908f028.json');

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-f0d33.firebasestorage.app',
    unique:true
})

const upload = multer({
    storage:storage,
})


module.exports = upload;