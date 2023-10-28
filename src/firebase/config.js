import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCN1zb1huC8_dMCHjfxPTXN2-lKhaLM3cc",
authDomain: "homieshare-bf8d9.firebaseapp.com",
projectId: "homieshare-bf8d9",
storageBucket: "homieshare-bf8d9.appspot.com",
messagingSenderId: "393147520093",
appId: "1:393147520093:web:a9e3d6d15cc75b85a329b4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
