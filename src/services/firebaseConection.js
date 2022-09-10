import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAfoCFyytQlQIzEz1W2JTq4YOjLCJEAkog",
    authDomain: "freelancer-projeto.firebaseapp.com",
    projectId: "freelancer-projeto",
    storageBucket: "freelancer-projeto.appspot.com",
    messagingSenderId: "8964270928",
    appId: "1:8964270928:web:450bcd53f7402f96525a55",
    measurementId: "G-X2ZQHXNR41"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase
