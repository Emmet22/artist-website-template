import { Link } from "react-router-dom";

// import components
import Section from "../components/common/Section";
import Tabs from "../components/common/Tabs";
import VerticalTabbedLayout from "../components/common/VerticalTabbedLayout";

// import data
import { creativeProcessSteps } from "../data/creativeProcessSteps";
import { materialItems } from "../data/MaterialOptions";

// import styles
import styles from "./About.module.css";

function About () {
    return (
        <>
        <main>

            {/* HERO */}
            <div className={styles.aboutHero}>
                <div className={styles.heroImage}>
                    <img 
                        src="https://placehold.co/600x600"
                        alt="artist/studio image"
                    />
                </div>
                <div className={styles.heroText}>
                    <h1>ARTIST/STUDIO NAME</h1>
                    <p>Art inspired by place, colour, and the stories we carry with us.</p>
                    <Link to="/gallery" className="btn">EXPLORE THE GALLERY</Link>
                </div>
            </div>

            {/* ARTIST INTRO */}
            <Section>
                
                <div className={styles.artistSection}>
        
                    <div className={styles.artistImage}>
                        <img 
                            src="https://placehold.co/400x400"
                            alt="artist working in their studio"
                        />
                    </div>
                    
                    <div className={styles.artistBio}>
                        <div className={styles.artistTitle}>
                            <h2>the artist behind each piece</h2>
                        </div>

                        <div className={styles.textSection}>
                            <p>
                                [Artist Name] is an independent artist creating original artwork 
                                inspired by landscape, colour and everyday moments. 
                                Each piece is developed by hand in the studio, with an emphasis 
                                on texture, atmosphere and individuality.
                            </p>
                        </div>
                        
                        <div className={styles.textSection}>
                            <p>
                                The aim isn't simply to fill a wall. 
                                Each piece is created to bring character, 
                                colour and a sense of place into the spaces where people live.
                            </p>
                        </div>
                    
                    </div>
                </div>
                
            </Section>

            {/* CREATIVE PROCESS */}
            <Section>
                <div className={styles.creativeProcess}>

                </div>
                <div className={styles.processTitle}> 
                    <h2>How each piece comes to life</h2>
                
                </div>
              
                {/* interactive process component */}
                <Tabs items={creativeProcessSteps} />

            </Section>

            {/* MATERIALS */}
            <Section>

                <div className={styles.materials}>

                    <div className={styles.materialTitle}>
                        <h2>Materials & Craft</h2>
                    </div>

                    <div className={styles.textSection}>
                        <p>
                            Every artwork is created using carefully selected
                            materials chosen for their appearance, durability,
                            and ability to preserve the finished piece.
                        </p>
                    </div>

                    <VerticalTabbedLayout items={materialItems} />

                </div>
            </Section>

            {/* PHILOSOPHY */}
                <Section>

                    <div className={styles.philosophy}>
                        <div className={styles.philosophyTitle}>
                            <h2>The Philosophy Behind the Work</h2>
                        </div>

                        <div className={styles.textSection}>
                            <p>
                                Artwork should do more than fill an empty wall.
                                It should change how a space feels.
                            </p>
                        </div>
                        
                        <div className={styles.textSection}>
                            <p>
                                Colour, texture and scale are considered with
                                the intention of creating pieces that can become
                                part of the character of a room while still
                                standing confidently on their own.
                            </p>
                        </div>  
                    </div>

                </Section>

            <Section>
                <div className={styles.callToAction}>
                    <div className={styles.ctaTitle}>                      
                        <h2>HAVE AN IDEA OF YOUR OWN?</h2>
                    </div>
                    <div className={styles.ctaText}>
                        <p>Create a personalised piece inspired by your space, story and style.</p>
                    </div>
                    <Link to="/commission" className="btn">create your own piece</Link>
                </div>
            </Section>
        </main>
        </>
    );
}

export default About;