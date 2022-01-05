import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { useSelector } from "react-redux"

export default function CheckoutModal() {
   const [show, setShow] = useState(false)
   const { cartItems } = useSelector((state) => state.cartReducer)

   const [name, setName] = useState("")
   const [address, setAddress] = useState("")
   const [phone, setPhone] = useState("")

   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)

   const handleSubmit = () => {
      handleClose()

      const userInfo = { address, name, phone }

      const orderInfo = {
         userInfo,
         cartItems,
         email: JSON.parse(window.localStorage.getItem("currentUser")).email,
         userId: JSON.parse(window.localStorage.getItem("currentUser")).uid,
      }

      console.log(orderInfo)
   }

   return (
      <>
         <button className="btn-1 btn s-btn" onClick={handleShow}>
            Checkout
         </button>

         <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>{/* <Modal.Title>Modal heading</Modal.Title> */}</Modal.Header>
            <Modal.Body>
               <form className="login-form">
                  <div className="input-box">
                     <label htmlFor="name">name</label>
                     <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>

                  <div className="input-box">
                     <label htmlFor="address">address</label>
                     <input
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                     />
                  </div>

                  <div className="input-box">
                     <label htmlFor="phone">phone</label>
                     <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                     />
                  </div>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>

               <button className="btn-1 btn" onClick={handleSubmit}>
                  Order
               </button>
            </Modal.Footer>
         </Modal>
      </>
   )
}
