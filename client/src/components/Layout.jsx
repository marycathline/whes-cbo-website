import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; 

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
