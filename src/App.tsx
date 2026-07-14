import { Routes, Route } from "react-router-dom";

// import components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// import pages for router
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArtDetail from "./pages/ArtDetail";

import "./styles/App.css";

function App() {
  return (
    <>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/art/:id" element={<ArtDetail />} />
      </Routes>
    </main>
    <Footer />
    </>
      
);
}

export default App;