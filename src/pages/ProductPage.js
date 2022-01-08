import React, { useEffect, useState } from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getProduct } from "../lib/fetchFunc"

export default function ProductPage() {
   const [loading, setLoading] = useState(false)
   const [qty, setQty] = useState(1)
   const [product, setProduct] = useState({})
   const [selectedSize, setSelectedSize] = useState()
   const dispatch = useDispatch()
   const params = useParams()

   const addToCart = (product) => {
      dispatch({ type: "ADD_TO_CART", payload: { ...product, qty, id: params.id } })
   }

   useEffect(() => getProduct(params.id, setProduct, setSelectedSize, setLoading), [params.id])

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

                  <div className="d-flex align-items-center my-4">
                     <button className="btn btn-outline-dark" onClick={() => qty > 1 && setQty(qty - 1)}>
                        -
                     </button>
                     <input
                        className="text-center form-control w-25 ms-2"
                        type="number"
                        value={qty}
                        min={1}
                        max={10}
                        onChange={(e) => setQty(e.target.value)}
                     />
                     <button className="btn btn-outline-dark ms-2" onClick={() => qty < 10 && setQty(qty + 1)}>
                        +
                     </button>
                  </div>

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
