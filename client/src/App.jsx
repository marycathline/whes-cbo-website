import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Main pages
import Home from "./pages/Home";
import About from "./pages/About";
import Ourwork from "./pages/Ourwork"; 
import GetInvolved from './pages/GetInvolved';
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import Contact from "./pages/Contact";

// Sub-program pages (inside Programs folder)
import Health from "./pages/Programs/Health";
import EconomicEmpowerment from "./pages/Programs/Economic";  
import HousingSupport from "./pages/Programs/Housing";        

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ourwork" element={<Ourwork />} />
          <Route path="getinvolved" element={<GetInvolved />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />

          {/* Program subpages */}
          <Route path="programs/health" element={<Health />} />
          <Route path="programs/economic" element={<EconomicEmpowerment />} />
          <Route path="programs/housing" element={<HousingSupport />} />
          {/* <Route path="programs/advocacy" element={<Advocacy />} />*/}
        </Route>
      </Routes>
    </Router>
  );
}
