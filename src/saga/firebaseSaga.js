import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDC5sB0pH95gxlJWKFgIMdBUCvYevPgbYU",
    authDomain: "student-52ab2.firebaseapp.com",
    databaseURL: "https://student-52ab2.firebaseio.com",
    projectId: "student-52ab2",
    storageBucket: "student-52ab2.appspot.com",
    messagingSenderId: "143736981342"
};
const firebaseApp = firebase.initializeApp(config);

const rsf = new ReduxSagaFirebase(firebaseApp);

export { firebaseApp }

export default rsf;