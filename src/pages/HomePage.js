import { useEffect, useState } from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import { useSelector } from "react-redux"
import { getProducts } from "../lib/fetchFunc"
import ProductCard from "../components/ProductCard"
import Hero from "../components/Hero"

export default function HomePage() {
   const [loading, setLoading] = useState(false)
   const { cartItems } = useSelector((state) => state.cartReducer)
   const [products, setProducts] = useState([])

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
   }, [cartItems])

   useEffect(() => getProducts(setProducts, setLoading), [])

   return (
      <DefaultLayout loading={loading}>
         <div className="container">
            <Hero />

            <div className="row g-3">
               {products.map((product) => (
                  <div className="col-sm-6 col-md-4" key={product.id}>
                     <ProductCard product={product} />
                  </div>
               ))}
            </div>
         </div>
      </DefaultLayout>
   )
}
