import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import fireDB from "../firebaseConfig"
import DefaultLayout from "../layouts/DefaultLayout"
import { Link, useNavigate } from "react-router-dom"

export default function HomePage() {
   const [products, setProducts] = useState([])

   const navigate = useNavigate()

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

   const truncate = (str, len = 35) => {
      return str.length > len ? str.substring(0, len) + "..." : str
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

                        <div className="product-btn ">
                           <button className="btn bg-dark text-light">Add to Cart</button>
                           <button
                              className="btn bg-dark text-light"
                              onClick={() => navigate(`/product/${product.id}`)}
                           >
                              View
                           </button>
                        </div>

                        <div className="product-content">
                           <span className="product-category">{product.category}</span>

                           <div className="d-flex align-items-start justify-content-center">
                              <Link to={`/product/${product.id}`}>
                                 <span className="product-title" title={product.name}>
                                    {truncate(product.name)}
                                 </span>
                              </Link>
                              <p className="product-price">${product.price}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </DefaultLayout>
   )
}
