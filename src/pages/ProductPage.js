import React, { useEffect, useState } from "react"
import { getDoc, doc } from "firebase/firestore"
import fireDB from "../firebaseConfig"
import DefaultLayout from "../layouts/DefaultLayout"
import { useParams } from "react-router-dom"

// const sizes = ["32gb", "64gb", "128gb", "256gb"]

export default function ProductPage() {
   const [product, setProduct] = useState({})
   const [selectedSize, setSelectedSize] = useState()
   const params = useParams()

   const getProduct = async (id) => {
      try {
         const data = await getDoc(doc(fireDB, "products", id))

         setProduct(data.data())

         if (data.data().sizes) {
            setSelectedSize(data.data().sizes[0])
         }
      } catch (err) {
         console.log(err)
      }
   }

   useEffect(() => {
      getProduct(params.id)
   }, [params.id])

   return (
      <DefaultLayout>
         <div className="conatiner">
            <div className="row">
               <div className="col-md-6">
                  <div className="p-img text-center">
                     <img src={product.imageUrl} alt={product.name} width={360} height={460} />
                  </div>
               </div>

               <div className="col-md-6">
                  <span className="p-category">{product.category}</span>

                  <h1 className="p-title">{product.name}</h1>
                  <p className="p-price">${product.price}</p>

                  {product.sizes && (
                     <div className="p-sizes">
                        {product.sizes.map((size, i) => (
                           <button
                              key={i}
                              className={`p-size ${size === selectedSize ? "selected-size" : "not-selected"}`}
                              onClick={() => setSelectedSize(size)}
                           >
                              {size}
                           </button>
                        ))}
                     </div>
                  )}
                  <p className="p-desc">
                     <strong>Description: </strong>
                     {product.description}
                  </p>
               </div>
            </div>
         </div>
      </DefaultLayout>
   )
}
