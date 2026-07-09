import styles from './ArtPiece.module.css';

interface ArtPieceProps {
    imageURL: string;
    title: string;
    description: string;
}


function ArtPiece({ imageURL, title, description }: ArtPieceProps) {
    return (
        <div className={styles.artPiece}>

            <img 
                className={styles.image}
                src={imageURL}
                alt={description} /* needed for accesability */
            />

            <div className={styles.description}>
                <div className={styles.title}>
                    <h4>{title}</h4>
                </div>
                <p>{description}</p>
            </div>

            <button className="enquireButton">ENQUIRE</button>
        </div>
            
);
}

export default ArtPiece;