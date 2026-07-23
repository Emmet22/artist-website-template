import {useParams} from 'react-router-dom';

// import data
import { artworkData } from '../data/ArtPieceData';
import { sampleCollections } from '../data/SampleCollectionData';
import { sizeOptions, frameOptions, materialOptions } from '../data/CommissionOptionsData';

// import components
import Section from "../components/common/Section";
import ArtWorkPreview from "../components/artwork/ArtWorkPreview";
import CustomisationPanel from "../components/commission/CustomisationPanel";



function CommissionBuilder() {

    // get artPiece ID from URL
    const {id: artPieceId} = useParams();

    // fetch the artwork data
    const artPiece = artworkData.find(
        piece => piece.id === Number(artPieceId)
    );

    if (!artPiece) {
        return (
            <h2>ART PIECE NOT FOUND</h2>
        );
    }

    // fetch the collection data
    const collection = sampleCollections.find(
        collection => collection.id === artPiece.collectionId
    );

    if (!collection) {
        return (
            <h2>COLLECTION NOT FOUND</h2>
        );
    }

    // get customisation options

    // calculate price based on selected options

    return (
        <main>
            <Section>
                <h1>Create your piece</h1>
                <p>
                    Bring the artwork to life with your own 
                    choice of size, material and frame.
                </p>
            </Section>

            <Section>
                <ArtWorkPreview artPiece={artPiece} collection={collection} />
            </Section>

            <Section>
                <CustomisationPanel 
                    sizes={sizeOptions}
                    frames={frameOptions}
                    materials={materialOptions}
                />
            </Section>

        </main>
    );
}

export default CommissionBuilder;