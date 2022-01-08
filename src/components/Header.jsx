import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { HiOutlineMenuAlt3, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi"
import { useSelector } from "react-redux"

export default function Header() {
   const { cartItems } = useSelector((state) => state.cartReducer)
   const [cartLength, setCartLength] = useState(0)

   const logout = () => {
      localStorage.removeItem("currentUser")
      window.location.reload()
   }

   useEffect(() => {
      let count = 0
      cartItems.forEach((item) => (count += item.qty))
      setCartLength(count)
   }, [cartItems])

   return (
      <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-lg">
            <Link className="navbar-brand bold" to="/">
               <img src="/logo-2.png" alt="v-merce logo" width={86} height={30} />
            </Link>

            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavDropdown"
               aria-controls="navbarNavDropdown"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <HiOutlineMenuAlt3 />
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
               <ul className="navbar-nav ms-auto">
                  <li className="nav-item dropdown px-2">
                     <div
                        className="nav-link "
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                     >
                        <HiOutlineUser size={25} />
                     </div>
                     <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                        {localStorage.getItem("currentUser") ? (
                           <>
                              <li>
                                 <Link className="dropdown-item" to="/" onClick={logout}>
                                    Logout
                                 </Link>
                              </li>
                           </>
                        ) : (
                           <>
                              <li>
                                 <Link className="dropdown-item" to="/login">
                                    Login
                                 </Link>
                              </li>
                              <li>
                                 <Link className="dropdown-item" to="/register">
                                    Register
                                 </Link>
                              </li>
                           </>
                        )}
                     </ul>
                  </li>

                  <li className="nav-item px-2">
                     <Link className="nav-link" to="/cart">
                        <HiOutlineShoppingCart size={25} />
                        {cartLength > 0 && <span className="cart-length">{cartLength}</span>}
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}
