// import components
import Section from "../components/common/Section";
import Hero from "../components/common/Hero";
import Collection from "../components/artwork/Collection";

function Home() {
    return (
      <>
        <Hero />

        <Section>
          <h2>Featured Collections</h2>
          <Collection 
            key="1"
            name="Sample Collection Name"
            description="This is a sample collection description."
            pieces={[
              { id: 1, imageURL: "https://placehold.co/150x150", title: "title", description: "Sample desc 1" },
              { id: 2, imageURL: "https://placehold.co/150x150", title: "title",description: "Sample desc 2" },
              { id: 3, imageURL: "https://placehold.co/150x150", title: "title",description: "Sample desc 3" },
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
      </>
      
    );
}

export default Home;