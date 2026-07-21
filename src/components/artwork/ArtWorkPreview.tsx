import styles from "./ArtworkPreview.module.css";

import type { ArtPiece } from "../../types/ArtPiece";
import type { Collection } from "../../types/Collection";
import type React  from "react";

interface ArtworkPreviewProps {
    artPiece: ArtPiece;
    collection: Collection;
    children?: React.ReactNode;
}


function ArtworkPreview({artPiece, collection, children}: ArtworkPreviewProps) {

    return (
        <div className={styles.artContent}>

            <div className={styles.imgContainer}>
                <img
                    className={styles.artImage}
                    src={artPiece.imageURL}
                    alt={artPiece.title}
                />
            </div>


            <div className={styles.infoContainer}>

                <div className={styles.infoSection}>
                    <h1 className={styles.artTitle}>
                        {artPiece.title}
                    </h1>

                    <p>
                        {artPiece.description}
                    </p>
                </div>

                <div className={styles.infoSection}>
                    <h3 className={styles.collectionName}>
                        {collection.name}
                    </h3>

                    <p>
                        {collection.description}
                    </p>
                </div>
                
                {children}
            </div>

        </div>
    );
}


export default ArtworkPreview;