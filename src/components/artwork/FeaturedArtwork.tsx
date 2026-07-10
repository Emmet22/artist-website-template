import styles from './FeaturedArtwork.module.css';
import ArtPiece from './ArtPiece';


function FeaturedArtwork() {
    return (
        <div className={styles.featuredArtwork}>
            <h2>Avaliable to purchase</h2>

            <div className={styles.pieces}>
                <ArtPiece  
                    imageURL= "https://placehold.co/150x150" 
                    title= "title"
                    description= "Sample desc 1"
                />
                <ArtPiece  
                    imageURL= "https://placehold.co/150x150" 
                    title= "title"
                    description= "Sample desc 1"
                />
                <ArtPiece  
                    imageURL= "https://placehold.co/150x150" 
                    title= "title"
                    description= "Sample desc 1"
                />
                <ArtPiece  
                    imageURL= "https://placehold.co/150x150" 
                    title= "title"
                    description= "Sample desc 1"
                />
            </div>

        </div>
    );
}

export default FeaturedArtwork;