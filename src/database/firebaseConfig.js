import Firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCApCuAniWwq_MIVr9jwNl_OmcdY8QOJX4",
  authDomain: "pizza-planet-6cd68.firebaseapp.com",
  databaseURL: "https://pizza-planet-6cd68.firebaseio.com",
  projectId: "pizza-planet-6cd68",
  storageBucket: "pizza-planet-6cd68.appspot.com",
  messagingSenderId: "173377480164",
  appId: "1:173377480164:web:17cd2545b040ef93d3d3f1"
};
// Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
const db = firebaseApp.database();
// Database menu folder reference created automaticaaly in firebase
export const dbMenuRef = db.ref('menu'); 
