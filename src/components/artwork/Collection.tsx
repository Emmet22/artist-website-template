// import components
import ArtPiece from "./ArtPiece";

// import styles
import styles from "./Collection.module.css";

// import types
import type { Collection as CollectionType } from "../../types/Collection";

// import data
import { artworkData } from "../../data/ArtPieceData";

interface CollectionProps extends CollectionType {}

function Collection({id, name, description}: CollectionProps) {
    
    const collectionPieces = artworkData.filter(
        piece => piece.collectionId === id
    );
    
    return (
        <div className={styles.collection}>
            <h2>{name}</h2>

            <div className={styles.collectionContent}>            
                <div className={styles.collectionInfo}>
                    <p>{description}</p>
                </div>
                
                <div className={styles.collectionPieces}>
                    {collectionPieces.map((piece) => 
                        <ArtPiece 
                        key={piece.id}
                        {...piece}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Collection;