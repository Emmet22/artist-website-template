import styles from './LivePreview.module.css';

// import types
import type { ArtPiece } from '../../types/ArtPiece';
import type { Collection } from "../../types/Collection";
import type { SizeOption } from "../../types/SizeOption";
import type { MaterialOption } from "../../types/MaterialOption";
import type { FrameOption } from "../../types/FrameOption";

interface LivePreviewProps {
    artPiece: ArtPiece;
    collection: Collection;

    selectedSize: SizeOption;
    selectedMaterial: MaterialOption;
    selectedFrame: FrameOption;
}

function LivePreview({ 
    artPiece,
    collection,
    selectedSize,
    selectedMaterial,
    selectedFrame
}: LivePreviewProps) {

    return (
        <div className={styles.livePreview}>
    
            <img 
                className={styles.previewImage}
                src={artPiece.imageURL} 
                alt={artPiece.title} 
            />

            <div className={styles.previewInfo}>
                <h2>{artPiece.title}</h2>
                <p>{artPiece.description}</p>
                <h3>From the <span className={styles.collectionName}>{collection.name}</span> Collection</h3>
                <p>{collection.description}</p>
            </div>

            <div className={styles.currentSelection}>
                <h3>Current configuration:</h3>
                <p>
                    <strong>Size:</strong>
                    {selectedSize.name}
                </p>
                <p>
                    <strong>Material:</strong>
                    {selectedMaterial.name}
                </p>
                <p>
                    <strong>Frame:</strong>
                    {selectedFrame.name}
                </p>
            </div>
        </div>
    );

}

export default LivePreview;