// Components
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function DefaultLayout({ children }) {
   return (
      <div>
         <Header />

         <main className="content container-lg py-5">{children}</main>

         <Footer />
      </div>
   )
}
