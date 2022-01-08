import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import DefaultLayout from "../layouts/DefaultLayout"
import CartTable from "../components/CartTable"
import CheckoutModal from "../components/CheckoutModal"

export default function CartPage() {
   const [totalAmount, setTotalAmount] = useState(0)
   const [shippingCost, setShippingCost] = useState(12)
   const [cartLength, setCartLength] = useState(0)

   const { cartItems } = useSelector((state) => state.cartReducer)

   useEffect(() => {
      let temp = 0

      cartItems.forEach((el) => (temp += el.price * el.qty))

      setTotalAmount(temp)
   }, [cartItems])

   useEffect(() => {
      let count = 0
      cartItems.forEach((item) => (count += item.qty))
      setCartLength(count)
   }, [cartItems])

   return (
      <DefaultLayout>
         <h1>Shopping Cart</h1>

         <div className="row s-content">
            <div className="col-md-8">
               <CartTable />
            </div>

            <div className="col-md-4 s-total">
               <div className="bg-dark">
                  <h2 className="s-title">Order Summary</h2>

                  <hr />

                  <div className="s-sumary d-flex justify-content-between">
                     <p>items {cartLength}</p>
                     <p>${totalAmount}</p>
                  </div>

                  <div className="s-sumary d-flex justify-content-between">
                     <p>shipping</p>
                     <p>${shippingCost}</p>
                  </div>

                  <div className="s-sumary d-flex justify-content-between">
                     <p>promo Code</p>
                     <p>+</p>
                  </div>

                  <hr />

                  <div className="s-sumary d-flex justify-content-between">
                     <p>total cost</p>
                     <p>${totalAmount + shippingCost}</p>
                  </div>

                  {/* <button className="btn-1 btn s-btn">Checkout</button> */}

                  <CheckoutModal />
               </div>
            </div>
         </div>
      </DefaultLayout>
   )
}
