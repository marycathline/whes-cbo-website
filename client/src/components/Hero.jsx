import { Link } from "react-router-dom";
import logo from '../assets/logo.png';


export default function Hero() {
  return (
    <section className="bg-white text-whessBlack py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Logo */}
           <div className="flex-1 flex justify-center">
          <img 
            src={logo} 
            alt="WHESS Logo" 
            className="w-58 md:w-80 object-contain" 
          />
        </div>

        {/* Hero Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-whessBlue mb-4">
            Empowering Widowers. Uplifting Elderly. Restoring Dignity.
          </h1>
          <p className="text-lg mb-6 max-w-md">
            Join us in transforming lives through health, economic support, and compassionate care for elderly widowers across Kenya.
          </p>
          <Link
            to="/about"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6
             rounded shadow transition"
          >

            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
