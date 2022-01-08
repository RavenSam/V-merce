import React from "react"
import { useDispatch } from "react-redux"
import { truncate } from "../lib/helpers"
import { Link, useNavigate } from "react-router-dom"

export default function ProductCard({ product }) {
   const dispatch = useDispatch()

   const navigate = useNavigate()

   const addToCart = (product) => {
      dispatch({ type: "ADD_TO_CART", payload: { ...product, qty: 1 } })
   }

   return (
      <>
         <div className="m-1 p-2 product-card">
            <div className="product-img">
               <img src={product.imageUrl} alt={product.name} width={150} height={200} />
            </div>

            <div className="product-btn ">
               <button className="btn bg-dark text-light" onClick={() => addToCart(product)}>
                  Add to Cart
               </button>
               <button className="btn bg-dark text-light" onClick={() => navigate(`/product/${product.id}`)}>
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
      </>
   )
}
