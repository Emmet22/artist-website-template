// import components
import Section from "../components/common/Section";
import Collection from "../components/artwork/Collection";

function Gallery() {
    return (
        <>
        <Section>
            <h2>Gallery Page</h2>
            <p>This is the Gallery page</p>

            <Collection 
                key="2"
                name="Sample Collection Name"
                description="This is a sample collection description."
                pieces={[
                { id: 4, imageURL: "https://placehold.co/150x150", description: "Sample desc 1" },
                { id: 5, imageURL: "https://placehold.co/150x150", description: "Sample desc 2" },
                { id: 6, imageURL: "https://placehold.co/150x150", description: "Sample desc 3" },
                ]}
            />  
        </Section>
        </>
    );
}

export default Gallery;