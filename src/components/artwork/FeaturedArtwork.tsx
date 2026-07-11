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
                        imageURL={artPiece.imageURL}
                        title={artPiece.title}
                        description={artPiece.description}
                        price={artPiece.price}
                        avaliable={artPiece.avaliable}
                    />
                ))   
                }
            
            </div>
            <button className="btn">Browse All</button>
        </div>
    );
}

export default FeaturedArtwork;