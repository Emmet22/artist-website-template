import styles from './FeaturedArtwork.module.css';
import ArtPiece from './ArtPiece';

import { artworkData } from '../../data/ArtPieceData';

function FeaturedArtwork() {

    // filter available pieces
    const availablePieces = artworkData.filter((piece) => piece.available); 

    return (
        <div className={styles.featuredArtwork}>
            <h2>Avaliable to purchase</h2>
            <p>Newest artwork ready to ship immediately</p>

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