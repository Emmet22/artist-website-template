import { Link } from "react-router-dom";

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
            
                {/* Map the sample collections*/}
                {sampleCollections.map((collection) => (
                    <Section>
                        <Collection 
                            key={collection.id}
                            {...collection}
                        />
                    </Section>
                ))}
           
            <Section>
                <div className={styles.galleryCTA}>
                    <div className={styles.galleryCTATitle}>
                        <h2>Can't find exactly what you're looking for?</h2>
                    </div>
                
                    <div className={styles.galleryCTAContent}>
                        <p>
                            Create a personalised piece inspired by your space,
                            story and style.
                        </p>
                    </div>

                    <Link to="/commission" className="btn">
                        CREATE YOUR OWN PIECE
                    </Link>

                </div>
            </Section>

        </div>
    );
}

export default Gallery;