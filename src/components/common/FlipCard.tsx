import React, { useState } from 'react';
import styles from './FlipCard.module.css';

interface FlipCardProps {
    title: string;
    frontText: string;
    backText: string;
}

function FlipCard({title, frontText, backText} : FlipCardProps) {

    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`${styles.card} ${flipped ? styles.flipped : ""}`}
            onClick={() => setFlipped(!flipped)}
        >
            <div className={styles.cardContent}>

                {/* FRONT */}
                <div className={styles.cardFront}>
                    <span className={styles.icon}>&gt;</span>

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

