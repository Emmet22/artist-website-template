import styles from './FeaturedArtwork.module.css';
import ArtPiece from './ArtPiece';

import { featuredArtworkData } from '../../data/FeaturedArtWorkData';

function FeaturedArtwork() {
    return (
        <div className={styles.featuredArtwork}>
            <h2>Avaliable to purchase</h2>
            <p>Newest artwork ready to ship immediately</p>

            <div className={styles.pieces}>
                
                {featuredArtworkData.map((artPiece) => (
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