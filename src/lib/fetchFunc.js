import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import fireDB from "../firebaseConfig"

export const getProducts = async (setProducts, setLoading) => {
   try {
      setLoading(true)
      const data = await getDocs(collection(fireDB, "products"))

      const allProducts = []

      data.forEach((doc) => {
         allProducts.push({ id: doc.id, ...doc.data() })
      })

      setProducts(allProducts)
      setLoading(false)
   } catch (err) {
      console.log(err)
      setLoading(false)
   }
}

export const getProduct = async (id, setProduct, setSelectedSize, setLoading) => {
   try {
      setLoading(true)
      const data = await getDoc(doc(fireDB, "products", id))

      setProduct(data.data())

      if (data.data().sizes) {
         setSelectedSize(data.data().sizes[0])
      }
      setLoading(false)
   } catch (err) {
      console.log(err)
      setLoading(false)
   }
}
