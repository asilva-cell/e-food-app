import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAva15VwXm_AbuoILPn2jeFndYU8RjRZq8",
  authDomain: "e-commerce-db-cb855.firebaseapp.com",
  databaseURL: "https://e-commerce-db-cb855.firebaseio.com",
  projectId: "e-commerce-db-cb855",
  storageBucket: "e-commerce-db-cb855.appspot.com",
  messagingSenderId: "349198946149",
  appId: "1:349198946149:web:68407f2a481a538536db8c",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user.", error.message);
    }
  }
  return userRef;
};

export const addCollectionsAndDocuments = async (
  collectionName,
  documentsToAdd
) => {
  const collectionRef = firestore.collection(collectionName);

  const batch = firestore.batch();
  documentsToAdd.forEach((doc) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, doc);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up google authitiction utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //trigger the google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
