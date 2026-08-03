import styles from "./Home.module.css";

// import components
import Section from "../components/common/Section";
import Hero from "../components/common/Hero";
import Collection from "../components/artwork/Collection";
import FlipCard from "../components/common/FlipCard";
import Timeline from "../components/common/Timeline";

// import sample data
import { sampleCollections } from "../data/SampleCollectionData";
import { processSteps } from "../data/ProcessSteps";

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

            <div className={styles.flipCardContainer}>
              <FlipCard 
                title="Handcrafted"
                frontText="Each piece is handcrafted by the artist using traditional techniques."
                backText="Each piece is carefully designed, poured and finished by hand, ensuring attention to detail."
              />

              <FlipCard 
                title="One of a kind"
                frontText="No two pieces are ever exactly the same."
                backText="The natural movement of colour and texture means every artwork develops its own unique patterns and character."
              />

              <FlipCard 
                title="Ready To Display"
                frontText="Professionally finished and prepared for your home."
                backText="Each artwork is completed with quality materials and finishing touches so it can be enjoyed immediately."
              />
            </div>
        </Section>

        <Section>
          <h3>The Process</h3>

          <Timeline steps={processSteps} />
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