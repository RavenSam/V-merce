import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { HiX } from "react-icons/hi"
import { truncate } from "../lib/helpers"

export default function CartTable() {
   const { cartItems } = useSelector((state) => state.cartReducer)
   const dispatch = useDispatch()

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
   }, [cartItems])

   const deleteFromCart = (product) => {
      dispatch({ type: "DELETE_FROM_CART", payload: product })
   }

   const adjustQty = (id, qty) => {
      dispatch({ type: "ADJUST_QTY", payload: { id, qty } })
   }

   return (
      <>
         {cartItems.length > 0 ? (
            <div className="shopping-table">
               <table className="table">
                  <tbody>
                     {cartItems.map((product) => (
                        <tr key={product.id}>
                           <td className="d-none d-md-table">
                              <div className="t-img">
                                 <img src={product.imageUrl} alt="" width={50} height={60} />
                              </div>
                           </td>

                           <td colSpan="2">
                              <div className="t-1">
                                 <span className="t-category">{product.category}</span>

                                 <Link to={`/product/${product.id}`}>
                                    <span className="t-title" title={product.name}>
                                       {truncate(product.name, 30)}
                                    </span>
                                 </Link>
                              </div>
                           </td>

                           <td className="d-none d-md-table-cell">
                              <input
                                 className="text-center form-control w-50 mx-auto"
                                 type="number"
                                 value={product.qty}
                                 min={1}
                                 max={10}
                                 onChange={(e) => adjustQty(product.id, +e.target.value)}
                              />
                           </td>

                           <td className="t-price">${product.price}</td>

                           <td>
                              <button
                                 className="delete btn"
                                 title="Delete from cart"
                                 aria-label="delete"
                                 onClick={() => deleteFromCart(product)}
                              >
                                 <HiX />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         ) : (
            <div className="text-center">
               <p>Your Cart is Empty</p>
            </div>
         )}
      </>
   )
}
