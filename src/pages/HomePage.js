import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import fireDB from "../firebaseConfig"
import DefaultLayout from "../layouts/DefaultLayout"

export default function HomePage() {
   const [products, setProducts] = useState([])

   const getProducts = async () => {
      try {
         const data = await getDocs(collection(fireDB, "products"))

         const allProducts = []

         data.forEach((doc) => {
            allProducts.push({ id: doc.id, ...doc.data() })
         })

         setProducts(allProducts)
      } catch (err) {
         console.log(err)
      }
   }

   useEffect(() => {
      getProducts()
   }, [])

   return (
      <DefaultLayout>
         <div className="container">
            <div className="row g-3">
               {products.map((product) => (
                  <div className="col-sm-6 col-md-4" key={product.id}>
                     <div className="m-1 p-2 product-card">
                        <div className="product-img">
                           <img src={product.imageUrl} alt={product.name} width={150} height={200} />
                        </div>

                        <div className="product-content">
                           <span className="product-category">{product.category}</span>
                           <h2 className="product-title">{product.name}</h2>
                           <p className="product-price">${product.price}</p>
                        </div>

                        <div className="product-btn ">
                           <button className="btn bg-dark text-light">Add to Cart</button>
                           <button className="btn bg-dark text-light">View</button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </DefaultLayout>
   )
}
