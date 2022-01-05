import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: "v-merce.firebaseapp.com",
   projectId: "v-merce",
   storageBucket: "v-merce.appspot.com",
   messagingSenderId: process.env.REACT_APP_MSG_ID,
   appId: process.env.REACT_APP_APP_ID,
   measurementId: process.env.REACT_APP_MESURE_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const fireDB = getFirestore(app)

export default fireDB
