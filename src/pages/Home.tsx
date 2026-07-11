// import components
import Section from "../components/common/Section";
import Hero from "../components/common/Hero";
import Collection from "../components/artwork/Collection";

// import sample data
import { sampleCollections } from "../data/SampleCollectionData";

function Home() {
    return (
      <>
        <Hero />

        <Section>
          <h2>Featured Collections</h2>
          <Collection 
            {...sampleCollections[0]}
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
      </>
      
    );
}

export default Home;