// import components
import Section from "../components/common/Section";
import Collection from "../components/artwork/Collection";
import FeaturedArtwork from "../components/artwork/FeaturedArtwork";

function Gallery() {
    return (
        <div>
            <FeaturedArtwork />

            <Section>
                <Collection 
                    key="2"
                    name="Sample Collection Name"
                    description="This is a sample collection description."
                    pieces={[
                    { id: 4, imageURL: "https://placehold.co/150x150", title: "title",description: "Sample desc 1" },
                    { id: 5, imageURL: "https://placehold.co/150x150", title: "title", description: "Sample desc 2" },
                    { id: 6, imageURL: "https://placehold.co/150x150", title: "title",description: "Sample desc 3" },
                    ]}
                />  
            </Section>
        </div>
    );
}

export default Gallery;