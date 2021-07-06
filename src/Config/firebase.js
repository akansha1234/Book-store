import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAVTZ4CcKPtCy050sLleu7Mr6NKCRT48nI",
  authDomain: "book-store-14c12.firebaseapp.com",
  projectId: "book-store-14c12",
  storageBucket: "book-store-14c12.appspot.com",
  messagingSenderId: "740705990925",
  appId: "1:740705990925:web:1bb179576557d182bf9844"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
