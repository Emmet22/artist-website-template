// import styles
import styles from './ArtPiece.module.css';

// import types
import type { ArtPiece as ArtPieceType } from '../../types/ArtPiece';

// import router to allow for linking to ArtDetail page
import { Link } from 'react-router-dom';

interface ArtPieceProps extends ArtPieceType {}

function ArtPiece({ id, imageURL, title, description, avaliable, price }: ArtPieceProps) {
    return (
        <Link to={`/art/${id}`}>
        
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
        </Link>        
);
}

export default ArtPiece;