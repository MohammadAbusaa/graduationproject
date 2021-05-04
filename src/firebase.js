import firebase from 'firebase';
const fbConfig={
    apiKey: "AIzaSyBuDRfNWCAjntKVhP8GvW7GA9PhCPr-wFQ",
    authDomain: "helloworld-6751b.firebaseapp.com",
    projectId: "helloworld-6751b",
    storageBucket: "helloworld-6751b.appspot.com",
    messagingSenderId: "458417374509",
    appId: "1:458417374509:web:571ae16922ae1a6e6a3fa4",
    measurementId: "G-4DVS9RQQB4"
};
firebase.initializeApp(fbConfig);
firebase.analytics();
var db=firebase.database();
export default db;