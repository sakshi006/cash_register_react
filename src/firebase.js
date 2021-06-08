import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBJPRzBWRTAiQZJbngnROTcy9i2UZMsEYw",
  authDomain: "crud-81740.firebaseapp.com",
  databaseURL: "https://crud-81740-default-rtdb.firebaseio.com",
  projectId: "crud-81740",
  storageBucket: "crud-81740.appspot.com",
  messagingSenderId: "980730734567",
  appId: "1:980730734567:web:d65b33cbf7331eda52ff42",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
