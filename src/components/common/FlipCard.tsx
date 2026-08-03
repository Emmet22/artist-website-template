import { useState } from 'react';
import styles from './FlipCard.module.css';

interface FlipCardProps {
    title: string;
    frontText: string;
    backText: string;
}

function FlipCard({title, frontText, backText} : FlipCardProps) {

    const [flipped, setFlipped] = useState(false);

    // function for flipping
    const toggleFlip = () => {
        setFlipped(previous => !previous);
    }

    return (
        <div
            className={`${styles.card} ${flipped ? styles.flipped : ""}`}
            onClick={toggleFlip}
            // for keyboard users
            onKeyDown={(e) => {
                if(e.key === "Enter" || e.key === " ") {
                    toggleFlip();
                    }
                }}
            role="button"
            tabIndex={0} 
            aria-label={`Flip the card about ${title}`}
        >
            <div className={styles.cardContent}>

                {/* FRONT */}
                <div className={styles.cardFront}>
                    <span className={styles.icon}>↻</span>

                    <h3 className={styles.title}>{title}</h3>
                    <p>{frontText}</p>
                    <small className={styles.smallText}>Click to learn more</small>
                </div>

                {/* BACK */}
                <div className={styles.cardBack}>
                    <p>{backText}</p>
                    <small className={styles.smallText}>Click to go back</small>
                </div>

            </div>
        </div>
    );
}

export default FlipCard;

