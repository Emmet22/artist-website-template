import Navbar from "./components/Navbar.tsx";
import ArtPiece from "./components/ArtPiece.tsx";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Artist Website Template Project</h1>
        <p>This is the homepage</p>

        <p>Below is an art piece component </p>
        <ArtPiece></ArtPiece>
      </main>
    </div>
  );
}

export default App;