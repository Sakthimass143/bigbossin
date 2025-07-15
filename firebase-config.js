// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBEuhWn0E9t0CXLqtl9JS0meW-UaIOJ69U",
  authDomain: "bigboss-99c00.firebaseapp.com",
  databaseURL: "https://bigboss-99c00-default-rtdb.firebaseio.com",
  projectId: "bigboss-99c00",
  storageBucket: "bigboss-99c00.appspot.com",
  messagingSenderId: "719397772316",
  appId: "1:719397772316:web:e2f705022908af1866d3d9",
  measurementId: "G-X7SGNWM2VS"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();
