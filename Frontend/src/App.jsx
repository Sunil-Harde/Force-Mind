import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import SkeletonLoader from './components/SkeletonLoader';

function App() {


  const [SkeletonLoad, setSkeletonLoad] = useState(false);


  useEffect(() => {
    const SkeletonLoadTimer = setTimeout(() => setSkeletonLoad(true), 2000);
    return () => {
      clearTimeout(SkeletonLoadTimer);
    }
  }, []);

  return (
    <>
      {SkeletonLoad ? (

        <div className="flex flex-col min-h-screen ">
          <Navbar />
          <AnimatePresence mode="wait">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </AnimatePresence>
          <Footer />
        </div>
      ) : (
        <SkeletonLoader />

      )}
    </>
  );
}

export default App;
