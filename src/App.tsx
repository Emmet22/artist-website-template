import Hero from "./components/common/Hero";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Collection from "./components/artwork/Collection";
import Section from "./components/common/Section";
import { sampleCollections } from "./data/SampleCollectionData";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />

        <Section>
          <h3>Featured Collections</h3>
          <Collection 
            key="1"
            name="Sample Collection"
            description="This is a sample collection description."
            pieces={[
              { id: 1, imageURL: "sampleURL1", description: "Sample desc 1" },
              { id: 2, imageURL: "sampleURL2", description: "Sample desc 2" },
              { id: 3, imageURL: "sampleURL3", description: "Sample desc 3" },
            ]}
          />  
        </Section>

        <Section> 
            <h3>Why each piece is unique</h3>
            <p>Each piece is unique sample text sample description etc etc etc</p>

        </Section>

        <Section>
          <h3>The Process</h3>
          <ul>
            <li><p>Find piece you like</p></li>
            <li><p>Enquire to artist to cmossion a piece from the collection</p></li>
            <li><p>Artist approves commission</p></li>
            <li><p>You recieve your piece, with a certificate of uniqueness</p></li>
          </ul>
        </Section>

        <Section> 
          <h3>Be the first to hear about new collections</h3>
          <p>EMAIL LIST SIGN UP - WORK IN PRGRESS</p>
        </Section>

        {/* OLD CODE
        { using the map function to make use of the sample collection data 
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
        */}
      </main>
    <Footer />
      
    </div>
  );
}

export default App;