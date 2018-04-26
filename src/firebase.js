import * as firebase from 'firebase';
// Initialize Firebase
var  config = {
    apiKey: "AIzaSyAotn97Ai4jXwKYWsI9ZruTJAJ0AH3JOtY",
    authDomain: "project-meher-frioui.firebaseapp.com",
    databaseURL: "https://project-meher-frioui.firebaseio.com",
    projectId: "project-meher-frioui",
    storageBucket: "project-meher-frioui.appspot.com",
    messagingSenderId: "201638082535"
  };
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
