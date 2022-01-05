import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"

// Styles
import "react-toastify/dist/ReactToastify.min.css"
import "./styles/defaultLayout.css"
import "./styles/productPage.css"
import "./styles/cartPage.css"
import "./styles/loginPage.css"

// Pages
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import ProductPage from "./pages/ProductPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

export default function App() {
   return (
      <>
         <ToastContainer
            position="top-left"
            autoClose={3000}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />

         <BrowserRouter>
            <Routes>
               <Route path="/" exact element={<HomePage />} />

               <Route
                  path="/cart"
                  element={
                     <ProtectedRoutes>
                        <CartPage />
                     </ProtectedRoutes>
                  }
               />

               <Route path="/product/:id" element={<ProductPage />} />

               <Route path="/register" element={<RegisterPage />} />

               <Route path="/login" element={<LoginPage />} />
            </Routes>
         </BrowserRouter>
      </>
   )
}

export const ProtectedRoutes = ({ children }) => {
   if (localStorage.getItem("currentUser")) {
      return children
   } else {
      return <Navigate to="/login" />
   }
}
