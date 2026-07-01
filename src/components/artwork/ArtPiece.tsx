import styles from './ArtPiece.module.css';

interface ArtPieceProps {
    imageURL: string;
    description: string;
}


function ArtPiece({ imageURL, description }: ArtPieceProps) {
    return (
        <div className={styles.artPiece}>
            <div className={styles.artContent}>
                <img src={imageURL}/>
                <p>{description}</p>
            </div>
            <button>ENQUIRE</button>
        </div>
            
);
}

export default ArtPiece;