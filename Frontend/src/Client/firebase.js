import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUf2JphKT__iI8BYWyN8WFDBJ-8mHgOXA",
    authDomain: "e-library-dc308.firebaseapp.com",
    projectId: "e-library-dc308",
    storageBucket: "e-library-dc308.appspot.com",
    messagingSenderId: "426167561049",
    appId: "1:426167561049:web:511dab548af51ab9ef3a48",
    measurementId: "G-14WEF60WMT"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };