import styles from "./Hero.module.css";
import Section from "./Section";

function Hero () {
    return (
        <Section >
            <div className={styles.hero}>
                <h1>SAMPLE ARTIST STUDIO</h1>
                <h2>Original Art Each Unique</h2>
                <div className={styles.browseButton}>
                    <p>BROWSE COLLECTION BUTTON</p>
                </div>
            </div>  
        </Section>
    );
}

export default Hero;