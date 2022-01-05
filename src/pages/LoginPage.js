import React, { useState } from "react"
import { Link } from "react-router-dom"
import { HiHome } from "react-icons/hi"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"

export default function LoginPage() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [remember, setRemember] = useState(false)
   const auth = getAuth()
   const [loading, setLoading] = useState(false)

   const handleSubmit = async (e) => {
      e.preventDefault()

      try {
         setLoading(true)

         const { user } = await signInWithEmailAndPassword(auth, email, password)

         localStorage.setItem("currentUser", JSON.stringify(user))
         setLoading(false)
         toast.success("You Logged Successfully")

         setTimeout(() => {
            window.location.href = "/"
         }, 2000)
      } catch (err) {
         console.log(err)
         setLoading(false)
         toast.error("Something Went Wrong")
      }
   }

   return (
      <div className="loginPage">
         <div className="login-card">
            <Link to="/">
               <button className="l-home">
                  <HiHome />
               </button>
            </Link>

            <div className="login-head">
               <h1>Login</h1>
            </div>

            <div className="l-box">
               <form className="login-form" onSubmit={handleSubmit}>
                  <div className="input-box">
                     <label htmlFor="email">email</label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>

                  <div className="input-box">
                     <label htmlFor="password">password</label>
                     <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>

                  <div className="d-flex justify-content-between align-items-center sub-text">
                     <div className="login-checkbox">
                        <input
                           id="remember"
                           aria-describedby="remember"
                           type="checkbox"
                           value={remember}
                           onChange={(e) => setRemember(e.target.checked)}
                        />

                        <label htmlFor="remember" className="ms-2">
                           Remember me
                        </label>
                     </div>

                     <Link to="/">Forget Password?</Link>
                  </div>

                  <button type="submit" className="btn btn-1" disabled={loading}>
                     {loading ? (
                        <span>
                           <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>{" "}
                           Loading...
                        </span>
                     ) : (
                        " Login"
                     )}
                  </button>
               </form>
            </div>
         </div>
         <div className="no-account">
            <p>
               Don't have an account?
               <Link to="/register">
                  <strong> Register</strong>
               </Link>
            </p>
         </div>
      </div>
   )
}
