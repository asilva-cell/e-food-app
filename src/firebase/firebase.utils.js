import firebase from "firebase/app"; //always neew the keyword firebase import first
import "firebase/firestore"; //after import what you need
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAva15VwXm_AbuoILPn2jeFndYU8RjRZq8",
	authDomain: "e-commerce-db-cb855.firebaseapp.com",
	databaseURL: "https://e-commerce-db-cb855.firebaseio.com",
	projectId: "e-commerce-db-cb855",
	storageBucket: "e-commerce-db-cb855.appspot.com",
	messagingSenderId: "349198946149",
	appId: "1:349198946149:web:68407f2a481a538536db8c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up google authitiction utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //trigger the google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
