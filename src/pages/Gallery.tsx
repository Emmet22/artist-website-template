// import components
import Section from "../components/common/Section";
import Collection from "../components/artwork/Collection";
import FeaturedArtwork from "../components/artwork/FeaturedArtwork";

// import sample collection data
import { sampleCollections } from "../data/SampleCollectionData";

// import styles
import styles from './Gallery.module.css';

function Gallery() {
    return (
        <div>
            <div className={styles.galleryIntro}>
                
                <div className={styles.galleryTitle}>
                    <h1>Explore the Gallery</h1>
                </div>

                <div className={styles.galleryText}>
                    <p>
                        Explore original collections inspired by landscape,
                        colour and everyday moments. Each piece is created
                        to bring character, atmosphere and individuality
                        into your space.
                    </p>
                </div>
            </div>

            <Section>
                <FeaturedArtwork />

            </Section>
            
            <Section>
                {/* Map the sample collections*/}
                {sampleCollections.map((collection) => (
                    <Collection 
                        key={collection.id}
                        {...collection}
                    />
                ))}
            </Section>
        </div>
    );
}

export default Gallery;