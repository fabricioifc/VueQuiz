import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

let initDb = firebase.initializeApp(firebaseConfig);
// db.settings({ timestampsInSnapshots: true });

export const db = initDb.firestore();
export const auth = initDb.auth();
export const postsRef = db.collection("posts");

// import Vue from "vue";
// import firebase from "firebase";
// import { firestorePlugin } from "vuefire";

// Vue.use(firestorePlugin);

// // Get a Firestore instance
// export const db = firebase.initializeApp(config).firestore();
