import React, { useState } from "react"
import { Link } from "react-router-dom"
import { HiHome } from "react-icons/hi"

export default function LoginPage() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [remember, setRemember] = useState(false)

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log({ email, password, remember })
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

                  <button type="submit" className="btn btn-1">
                     Login
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
