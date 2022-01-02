import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
   apiKey: process.env.API_KEY,
   authDomain: "v-merce.firebaseapp.com",
   projectId: "v-merce",
   storageBucket: "v-merce.appspot.com",
   messagingSenderId: process.env.MSG_ID,
   appId: process.env.APP_ID,
   measurementId: process.env.MESURE_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const fireDB = getFirestore(app)

export default fireDB
