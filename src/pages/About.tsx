import { Link } from "react-router-dom";

// import components
import Section from "../components/common/Section";

// import styles
import styles from "./About.module.css";

function About () {
    return (
        <>
        <main>
            <div className={styles.aboutHero}>
                <div className={styles.heroImage}>
                    <img 
                        src="https://placehold.co/400x400"
                        alt="artist/studio image"
                    />
                </div>
                <div className={styles.heroText}>
                    <h1>ARTIST/STUDIO NAME</h1>
                    <p>Short artist statement, build authenticity and trust</p>
                </div>
            </div>
            <Section>
                <h2>Artist story</h2>
                <p>SHORT paragraph about the artist or studio</p>
            </Section>
            <Section>
                <h2>Creative process</h2>
                <p>This could also be called something like "how each piece comes to life"</p>
                <ul>
                    <li>Step 1 - sketch</li>
                    <li>Step 2 - paint etc</li>
                </ul>
            </Section>
            <Section>
                <h2>Materials Used</h2>
                <p>Show quality, builds trust, people will ask about materials</p>
                <p>Each piece is made with:</p>
                <ul>
                    <li>Canvas type</li>
                    <li><strong>Acrilic</strong> paints</li>
                    <li>ETC</li>
                </ul>
            </Section>
            <Section>
                <h2>Commision Process</h2>
                <ul>
                    <li>Find a piece you like</li>
                    <li>Fill in form</li>
                    <li>ETC.</li>
                </ul>
            </Section>
            <Section>
                <h2>FAQs</h2>
                <p>How do I ...</p>
            </Section>

            <Section>
                <div className={styles.callToAction}>
                    <h2>Ready to own an original piece?</h2>
                    <p>Browse our gallery and choose a piece for you</p>
                    <Link to="/gallery" className="btn">VIEW GALLERY</Link>
                </div>
            </Section>
        </main>
        </>
    );
}

export default About;