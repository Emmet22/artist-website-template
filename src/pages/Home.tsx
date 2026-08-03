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
            <h3>Why choose original artwork</h3>
            <p>
              Every artwork is individually handcrafted using premium materials 
              and professional finishing techniques.
            </p>
            <p>
              Unlike mass-produced prints, every pour creates patterns 
              that can never be recreated, making every commission 
              completely unique.
            </p>

            {/*
              add section cards here
              1 handcrafted by the artist
              2 unique one of a kind
              3 ready to display
            */}
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
          <h3>STAY CONNECTED</h3>
          <p>
            Receive updates about new collections, 
            exclusive releases and behind-the-scenes studio stories.
          </p>

          <button className="btn">Join mailing list</button>
        </Section>
      </>
      
    );
}

export default Home;