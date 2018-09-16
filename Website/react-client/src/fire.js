import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCScazb_P5MOU0HawAkclEYHpqqacxOqVA",
    authDomain: "poppywatch-72416.firebaseapp.com",
    databaseURL: "https://poppywatch-72416.firebaseio.com",
    projectId: "poppywatch-72416",
    storageBucket: "poppywatch-72416.appspot.com",
    messagingSenderId: "18668610118"
  };

  var fire = firebase.initializeApp(config);
  export default fire;