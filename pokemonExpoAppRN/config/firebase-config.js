import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClJjzwj65f_jbr4XTSFhehWRSijqw4dsE",
  authDomain: "pokimon-21fba.firebaseapp.com",
  projectId: "pokimon-21fba",
  storageBucket: "pokimon-21fba.appspot.com",
  messagingSenderId: "558234605136",
  appId: "1:558234605136:web:54b8a36977e4331513e355"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default {
  firebase,
  db,
  app
}