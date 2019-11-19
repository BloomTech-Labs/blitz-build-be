require('dotenv')
let firebase = require('firebase')
const config = {
    apiKey: process.env.API_KEY,
    authDomain: "blitzbuild-8d5a6.firebaseapp.com",

    databaseURL:process.env.DATABASE_URL,

    databaseURL: "https://blitzbuild-8d5a6.firebaseio.com",

    projectId: "blitzbuild-8d5a6",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_ID,
    appId: process.env.APP_ID,
    measurementId: "G-J1DR7ZF188"
  };
  const FirebaseConfig = firebase.initializeApp(config)
  module.exports= FirebaseConfig