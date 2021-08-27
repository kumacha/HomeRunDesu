import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

const config = {
  apiKey: 'AIzaSyBfO4VzkprtQIx-f1ndm2Kmaqy3wneSCXk',
  authDomain: 'homerundesu-6774d.firebaseapp.com',
  projectId: 'homerundesu-6774d',
  storageBucket: 'homerundesu-6774d.appspot.com',
  messagingSenderId: '646274597932',
  appId: '1:646274597932:web:b32d3c2f24951d200dbd89',
  measurementId: 'G-15YDX7DS06',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.firestore();
}
export const auth = firebase.auth;
export default firebase;
