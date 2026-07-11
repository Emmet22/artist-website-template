// import components
import ArtPiece from "./ArtPiece";

// import styles
import styles from "./Collection.module.css";

// import types
import type { Collection as CollectionType } from "../../types/Collection";

interface CollectionProps extends CollectionType {}

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
                        {...piece}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Collection;