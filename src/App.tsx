import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Collection from "./components/Collection";
import "./App.css";

const woodlandPieces = [
  { id: 1, imageURL: "sampleURL1", description: "Sample desc 1" },
  { id: 2, imageURL: "sampleURL2", description: "Sample desc 2" },
  { id: 3, imageURL: "sampleURL3", description: "Sample desc 3" },
];

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Artist Website Template Project</h1>
        <p>This is the homepage</p>

        <p>Below is a sample collection</p>
        <Collection 
          name="Woodland collection"
          description="Sample woodland collection description"
          pieces={woodlandPieces}
        />
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;