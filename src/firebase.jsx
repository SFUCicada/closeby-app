import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyBCMc91NmO1US91eTjzd5OZVCw3ljRiIN8",
  
    authDomain: "closeby-app-6136d.firebaseapp.com",
  
    projectId: "closeby-app-6136d",
  
    storageBucket: "closeby-app-6136d.appspot.com",
  
    messagingSenderId: "233577476404",
  
    appId: "1:233577476404:web:83dc1167775b8b7f573561",
  
    measurementId: "G-WGW4J5DW6N"
  
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;