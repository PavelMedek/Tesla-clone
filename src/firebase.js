import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDpFarkul76cNt0K1DFe1QYkEMPNfum9DU",
    authDomain: "tesla-clone-app-18063.firebaseapp.com",
    projectId: "tesla-clone-app-18063",
    storageBucket: "tesla-clone-app-18063.appspot.com",
    messagingSenderId: "409541999379",
    appId: "1:409541999379:web:ed88fc7481fdaef51938e6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;