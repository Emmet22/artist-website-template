// import styles
import styles from './ArtPiece.module.css';

// import types
import type { ArtPiece as ArtPieceType } from '../../types/ArtPiece';

interface ArtPieceProps extends Omit<ArtPieceType, "id"> {}

function ArtPiece({ imageURL, title, description, avaliable, price }: ArtPieceProps) {
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

            <button className="enquireButton">
                {/* N.B. to display the {price} the char ` must be used not ' or "*/}
                {avaliable ? `BUY €${price}` : "ENQUIRE"}
            </button>
        </div>
            
);
}

export default ArtPiece;