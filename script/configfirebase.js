  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  import { 
    getDatabase, 
    set, 
    get,
    push, 
    query,
    ref,
    onChildAdded,
    onValue
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
//  

  const firebaseConfig = {
    apiKey: "AIzaSyAB0UH8d1_ZdrS_3yIwQeyhe5dIXYcIDVc",
    authDomain: "pet-spot-dc163.firebaseapp.com",
    projectId: "pet-spot-dc163",
    storageBucket: "pet-spot-dc163.appspot.com",
    messagingSenderId: "198720509631",
    appId: "1:198720509631:web:be60a740ec2fe31e55180a",
    measurementId: "G-06W170WRX8"
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)
  const auth = getAuth(app)

export { db, set, get, query, push, ref, onChildAdded, onValue };