
let firebase = require('firebase')
const config = {
    apiKey: "AIzaSyBa2eSzmAvPkFNEO0zVUE0zp4IEKfFO0Kc",
    authDomain: "blitzbuild-8d5a6.firebaseapp.com",
    databaseURL: "https://blitzbuild-8d5a6.firebaseio.com",
    projectId: "blitzbuild-8d5a6",
    storageBucket: "blitzbuild-8d5a6.appspot.com",
    messagingSenderId: "246807634724",
    appId: "1:246807634724:web:d13098e0b9e65cc84c09b1",
    measurementId: "G-J1DR7ZF188"
  };
  const FirebaseConfig = firebase.initializeApp(config)
  module.exports= FirebaseConfig