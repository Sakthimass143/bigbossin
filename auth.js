// auth.js

// Firebase Config (your project details)
const firebaseConfig = {
  apiKey: "AIzaSyBEuhWn0E9t0CXLqtl9JS0meW-UaIOJ69U",
  authDomain: "bigboss-99c00.firebaseapp.com",
  databaseURL: "https://bigboss-99c00-default-rtdb.firebaseio.com",
  projectId: "bigboss-99c00",
  storageBucket: "bigboss-99c00.firebasestorage.app",
  messagingSenderId: "719397772316",
  appId: "1:719397772316:web:e2f705022908af1866d3d9",
  measurementId: "G-X7SGNWM2VS"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
function login(email, password, callback) {
  auth.signInWithEmailAndPassword(email, password)
    .then(() => callback(true))
    .catch(err => {
      alert("Login failed: " + err.message);
      callback(false);
    });
}

// Logout function
function logout() {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
}

// Protect admin page
function protectAdminPage() {
  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "login.html";
    }
  });
}

// Redirect logged in users (for login.html)
function redirectIfLoggedIn() {
  auth.onAuthStateChanged(user => {
    if (user) {
      window.location.href = "admin.html";
    }
  });
}
