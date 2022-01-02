import { Route, BrowserRouter, Routes } from "react-router-dom"

import "./styles/defaultLayout.css"

// Pages
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import ProductPage from "./pages/ProductPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

export default function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" exact element={<HomePage />} />

               <Route path="/cart" element={<CartPage />} />

               <Route path="/product" element={<ProductPage />} />

               <Route path="/register" element={<RegisterPage />} />

               <Route path="/login" element={<LoginPage />} />
            </Routes>
         </BrowserRouter>
      </>
   )
}
