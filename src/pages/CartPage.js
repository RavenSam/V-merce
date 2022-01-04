import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import DefaultLayout from "../layouts/DefaultLayout"
import CartTable from "../components/CartTable"

export default function CartPage() {
   const [totalAmount, setTotalAmount] = useState(0)

   const { cartItems } = useSelector((state) => state.cartReducer)

   useEffect(() => {
      let temp = 0

      cartItems.forEach((el) => (temp += el.price))

      setTotalAmount(temp)
   }, [cartItems])

   return (
      <DefaultLayout>
         <h1>Shopping Cart</h1>

         <div className="row s-content">
            <div className="col-md-9">
               <CartTable />
            </div>

            <div className="col-md-3 s-total">
               <div className="bg-dark">
                  <h2 className="s-title">Order Summary</h2>

                  <hr />

                  <div className="s-sumary d-flex justify-content-between">
                     <p>items {cartItems?.length}</p>
                     <p>${totalAmount}</p>
                  </div>

                  <div className="s-sumary d-flex justify-content-between">
                     <p>shipping</p>
                     <p>$12</p>
                  </div>

                  <div className="s-sumary d-flex justify-content-between">
                     <p>promo Code</p>
                     <p>+</p>
                  </div>

                  <hr />

                  <div className="s-sumary d-flex justify-content-between">
                     <p>total cost</p>
                     <p>${totalAmount + 12}</p>
                  </div>

                  <button className="btn-1 btn s-btn">Checkout</button>
               </div>
            </div>
         </div>
      </DefaultLayout>
   )
}
