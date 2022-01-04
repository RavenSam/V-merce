// Components
import Header from "../components/Header"
import Footer from "../components/Footer"
import Loader from "../components/Loader"

export default function DefaultLayout({ children, loading }) {
   if (loading) {
      return <Loader />
   }

   return (
      <div>
         <Header />

         <main className="content container-lg py-5">{children}</main>

         <Footer />
      </div>
   )
}
