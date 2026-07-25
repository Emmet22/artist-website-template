import {useParams} from 'react-router-dom';
import { useState } from 'react';

// import data
import { artworkData } from '../data/ArtPieceData';
import { sampleCollections } from '../data/SampleCollectionData';
import { sizeOptions, frameOptions, materialOptions } from '../data/CommissionOptionsData';

// import components
import Section from "../components/common/Section";
import ArtWorkPreview from "../components/artwork/ArtWorkPreview";
import CustomisationPanel from "../components/commission/CustomisationPanel";
import PriceSummary from "../components/commission/PriceSummary";

// import types
import type { SizeOption } from '../types/SizeOption';
import type { MaterialOption } from '../types/MaterialOption';
import type { FrameOption } from '../types/FrameOption';

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

    // ensure small canvas with black frame are the default selected options
    const [selectedSize, setSelectedSize] = useState<SizeOption>(sizeOptions[0]);
    const [selectedMaterial, setSelectedMaterial] = useState<MaterialOption>(materialOptions[0]);
    const [selectedFrame, setSelectedFrame] = useState<FrameOption>(frameOptions[0]);

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

                    selectedSize={selectedSize}
                    selectedMaterial={selectedMaterial}
                    selectedFrame={selectedFrame}

                    setSelectedSize={setSelectedSize}
                    setSelectedMaterial={setSelectedMaterial}
                    setSelectedFrame={setSelectedFrame}
                />

                <PriceSummary 
                    basePrice={artPiece.price ?? 300} // basic price e.g. €300
                    selectedSize={selectedSize}
                    selectedMaterial={selectedMaterial}
                    selectedFrame={selectedFrame}
                />
            </Section>
            
        </main>
    );
}

export default CommissionBuilder;