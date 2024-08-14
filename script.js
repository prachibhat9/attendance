
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC8d_E2id8gJgVDhSre5V-7dDV1ysbo3iQ",
    authDomain: "fire9db-1bd15.firebaseapp.com",
    projectId: "fire9db-1bd15",
    storageBucket: "fire9db-1bd15.appspot.com",
    messagingSenderId: "770222654328",
    appId: "1:770222654328:web:0512332e8016299b69fe8d",
    measurementId: "G-73JPXKRR3F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  console.log(navigator.geolocation.getCurrentPosition)

  if(navigator.geolocation){
navigator.geolocation.getCurrentPosition((position)=>{
console.log(position.coords.latitude);
},
(error)=>{
   console.log(error.message ); 
})
  } 