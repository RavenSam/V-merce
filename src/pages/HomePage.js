import { collection, addDoc, getDocs } from "firebase/firestore"
import { useState } from "react"
import fireDB from "../firebaseConfig"
import DefaultLayout from "../layouts/DefaultLayout"

export default function HomePage() {
   const [users, setUsers] = useState([])

   const addData = async () => {
      try {
         const newUser = { name: "sara Doe", email: "saradoe@email.com" }

         const docRef = await addDoc(collection(fireDB, "users"), newUser)
      } catch (err) {
         console.log(err)
      }
   }

   const getData = async () => {
      try {
         const getUsers = await getDocs(collection(fireDB, "users"))

         const allUsers = []

         getUsers.forEach((doc) => {
            allUsers.push({ id: doc.id, ...doc.data() })
         })

         setUsers(allUsers)
      } catch (err) {
         console.log(err)
      }
   }

   console.log(users)

   return (
      <DefaultLayout>
         <h1>Home</h1>

         <button className="btn btn-outline-info" onClick={addData}>
            Add Data
         </button>

         <button className="btn btn-outline-info" onClick={getData}>
            Retrieve Data
         </button>
      </DefaultLayout>
   )
}
