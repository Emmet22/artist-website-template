import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

function Hero () {
    return (
        <div className={styles.hero}>

            <div className={styles.heroText}>
                <h2>SAMPLE ARTIST STUDIO NAME</h2>
                
                <h4>ORIGINAL ARTWORK | EACH UNIQUE</h4>
                <p>
                    <strong>Inspired</strong> by the beauty of the <strong>natural world</strong> and our <strong>solar system.</strong>
                </p>

                <p>
                    <strong>Commison</strong> a piece, espiaclly <strong>unique to you.</strong>
                </p>

                {/* 
                The link element is covered by the button 
                so it inherites the button
                styles from index.css. The link element 
                is already clickable.
                */}
                <Link to="/gallery" className="btn">BROWSE COLLECTIONS</Link>
            </div>

            <div className={styles.heroImage}>
                <img src="https://placehold.co/400x400" />
            </div>

        </div>  
    );
}

export default Hero;