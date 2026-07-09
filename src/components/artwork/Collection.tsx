import ArtPiece from "./ArtPiece";
import styles from "./Collection.module.css";

export interface ArtPieceData {
    id: number;
    title: string;
    imageURL: string;
    description: string;
}

export interface CollectionData {
    id: number;
    name: string;
    description: string;
    pieces: ArtPieceData[];
}

interface CollectionProps {
    name: string;
    description: string;
    pieces: ArtPieceData[];
}

function Collection({name, description, pieces}: CollectionProps) {
    return (
        <div className={styles.collection}>
            <h2>{name}</h2>

            <div className={styles.collectionContent}>            
                <div className={styles.collectionInfo}>
                    <p>{description}</p>
                </div>
                
                <div className={styles.collectionPieces}>
                    {pieces.map((piece) => 
                        <ArtPiece 
                        key={piece.id}
                        imageURL={piece.imageURL}
                        title={piece.title}
                        description={piece.description}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Collection;