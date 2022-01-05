import React, { useState } from "react"
import { HiHome } from "react-icons/hi"
import { Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"

export default function LoginPage() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")
   const [agree, setAgree] = useState(false)
   const auth = getAuth()
   const [loading, setLoading] = useState(false)

   const handleSubmit = async (e) => {
      e.preventDefault()

      try {
         setLoading(true)

         await createUserWithEmailAndPassword(auth, email, password)

         setLoading(false)
         toast.success("You Registred Successfully")
      } catch (err) {
         console.log(err)
         setLoading(false)
         toast.error("Something Went Wrong")
      }
   }

   return (
      <div className="registerPage">
         <div className="login-card">
            <Link to="/">
               <button className="l-home">
                  <HiHome />
               </button>
            </Link>

            <div className="login-head">
               <h1>Register</h1>
            </div>

            <div className="l-box">
               <form className="login-form" onSubmit={handleSubmit}>
                  <div className="input-box ">
                     <label htmlFor="email">email</label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>

                  <div className="d-md-flex align-items-center ">
                     <div className="input-box flex-fill">
                        <label htmlFor="password">password</label>
                        <input
                           type="password"
                           id="password"
                           name="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>

                     <div className="input-box  mt-3 mt-md-0 ms-md-2 flex-fill">
                        <label htmlFor="confirmPassword">confirm Password</label>
                        <input
                           type="password"
                           id="confirmPassword"
                           name="confirmPassword"
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                     </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center sub-text">
                     <div className="login-checkbox">
                        <input
                           id="terms"
                           aria-describedby="terms"
                           type="checkbox"
                           value={agree}
                           onChange={(e) => setAgree(e.target.checked)}
                        />

                        <label htmlFor="terms" className="ms-2">
                           I agree to the terms
                        </label>
                     </div>
                  </div>

                  <button type="submit" className="btn btn-1" disabled={loading}>
                     {loading ? (
                        <span>
                           <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>{" "}
                           Loading...
                        </span>
                     ) : (
                        " Register"
                     )}
                  </button>
               </form>
            </div>
         </div>
         <div className="no-account">
            <p>
               Already have an account?
               <Link to="/login">
                  <strong> Login</strong>
               </Link>
            </p>
         </div>
      </div>
   )
}
