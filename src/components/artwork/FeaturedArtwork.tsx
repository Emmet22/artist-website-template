import styles from './FeaturedArtwork.module.css';
import ArtPiece from './ArtPiece';

import { artworkData } from '../../data/ArtPieceData';

function FeaturedArtwork() {

    // filter available pieces
    const availablePieces = artworkData.filter(
        (piece) => piece.available
    ); 

    return (
        <div className={styles.featuredArtwork}>

            <div className={styles.heading}>
                <h2>Avaliable to purchase</h2>
                <p>
                    Discover the latest original pieces,
                    ready to ship immediately.
                </p>
            </div>
            

            <div className={styles.pieces}>
                
                {availablePieces.map((artPiece) => (
                    <ArtPiece
                        key={artPiece.id}
                        {...artPiece}
                    />
                ))   
                }
            
            </div>
            
        </div>
    );
}

export default FeaturedArtwork;