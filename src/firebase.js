import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHY0Q5RjFvjNvsfBoQPEp8dVrqcyhhym0",
    authDomain: "firstreactapp-1ed57.firebaseapp.com",
    projectId: "firstreactapp-1ed57",
    storageBucket: "firstreactapp-1ed57.appspot.com",
    messagingSenderId: "250446243694",
    appId: "1:250446243694:web:79a7247ec5fcb550a5037f",
    measurementId: "G-1RVSRM998R"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };