// import components
import Section from "../components/common/Section";
import Collection from "../components/artwork/Collection";
import FeaturedArtwork from "../components/artwork/FeaturedArtwork";

// import sample collection data
import { sampleCollections } from "../data/SampleCollectionData";

function Gallery() {
    return (
        <div>
            <FeaturedArtwork />

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