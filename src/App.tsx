import Navbar from "./components/Navbar";
import ArtPiece from "./components/ArtPiece";
import Footer from "./components/Footer";
import Collection from "./components/Collection";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Artist Website Template Project</h1>
        <p>This is the homepage</p>

        <p>Below is a sample collection</p>
        <Collection />
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;