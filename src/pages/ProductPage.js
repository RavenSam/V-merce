import React, { useEffect, useState } from "react"
import { getDoc, doc } from "firebase/firestore"
import fireDB from "../firebaseConfig"
import DefaultLayout from "../layouts/DefaultLayout"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"

export default function ProductPage() {
   const [loading, setLoading] = useState(false)
   const [product, setProduct] = useState({})
   const [selectedSize, setSelectedSize] = useState()
   const dispatch = useDispatch()
   const params = useParams()

   const getProduct = async (id) => {
      setLoading(true)
      try {
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

   const addToCart = (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product })
   }

   useEffect(() => getProduct(params.id), [params.id])

   return (
      <DefaultLayout loading={loading}>
         <div className="container">
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

                  <div className="">
                     <button className="btn btn-1" onClick={() => addToCart(product)}>
                        add to card
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </DefaultLayout>
   )
}
