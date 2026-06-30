import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Collection from "./components/artwork/Collection";
import { sampleCollections } from "./data/SampleCollectionData";
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

        <p>This is a sample collection</p>
        {/* using the map function to make use of the sample collection data */}
        {
          sampleCollections.map((collection) => (
            <Collection 
                key={collection.id}
                name={collection.name}
                description={collection.description}
                pieces={collection.pieces}
            />
          ))
        }

        {/*
        <p>Below is a sample collection</p>
        <Collection 
          name="Woodland collection"
          description="Sample woodland collection description"
          pieces={woodlandPieces}
        />
        */}
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;