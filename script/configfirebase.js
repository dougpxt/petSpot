  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);
