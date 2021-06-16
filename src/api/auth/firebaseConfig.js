import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTuZqCNV7xgb_1UpUmUvM7GZP9D9JFSNs",
  authDomain: "caramelapp-3545b.firebaseapp.com",
  projectId: "caramelapp-3545b",
  storageBucket: "caramelapp-3545b.appspot.com",
  messagingSenderId: "203728554052",
  appId: "1:203728554052:web:b1b2bfa3215fcea7019411",
  measurementId: "G-KZYP7PM373"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };