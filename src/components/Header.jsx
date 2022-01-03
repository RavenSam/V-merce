import React from "react"
import { Link } from "react-router-dom"
import { HiOutlineMenuAlt3, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi"

export default function Header() {
   return (
      <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-lg">
            <Link className="navbar-brand bold" to="/">
               LOGO
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
                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
                     </ul>
                  </li>

                  <li className="nav-item px-2">
                     <Link className="nav-link" to="/cart">
                        <HiOutlineShoppingCart size={25} />
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}
