import { Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

// import pages for router
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArtDetail from "./pages/ArtDetail";
import CommissionBuilder from "./pages/CommissionBuilder";

import "./styles/App.css";

function App() {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/commission" element={<CommissionBuilder />} />

        <Route path="/art/:id" element={<ArtDetail />} />
        <Route path="/commission/:id" element={<CommissionBuilder />} />
      </Routes>
    </main>
    <Footer />
    </>
      
);
}

export default App;