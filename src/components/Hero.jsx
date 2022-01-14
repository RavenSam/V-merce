import img1 from "../img/img-1.jpg"

export default function Hero() {
   return (
      <section className="hero">
         <div className="d-flex align-items-center justify-content-between">
            <div className="w-50">
               <h2>
                  Technology at your <br /> own <span className="text-c-1">convenience</span>
               </h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio labore necessitatibus veniam.
               </p>
            </div>

            <div className="">
               <img src={img1} alt="home" height={400} />
            </div>
         </div>
      </section>
   )
}
