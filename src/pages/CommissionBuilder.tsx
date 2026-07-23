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

    return (
        <main>
            {/*
            <Section>
                <h1>Create your own vision</h1>
                <p>
                    Personalise this artwork by choosing your perferred size, material
                    and frame. Your final price updates automatically based on your 
                    selections.
                </p>
            </Section>
            */}
            
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