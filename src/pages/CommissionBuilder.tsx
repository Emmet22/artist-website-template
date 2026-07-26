import {useParams} from 'react-router-dom';
import { useState } from 'react';

// import data
import { artworkData } from '../data/ArtPieceData';
import { sampleCollections } from '../data/SampleCollectionData';
import { sizeOptions, frameOptions, materialOptions } from '../data/CommissionOptionsData';

// import components
import Section from "../components/common/Section";
import CustomisationPanel from "../components/commission/CustomisationPanel";
import PriceSummary from "../components/commission/PriceSummary";
import LivePreview from "../components/commission/LivePreview";
import ArtworkSelector from "../components/commission/ArtworkSelector";

// import types
import type { SizeOption } from '../types/SizeOption';
import type { MaterialOption } from '../types/MaterialOption';
import type { FrameOption } from '../types/FrameOption';

// import styles
import styles from './CommissionBuilder.module.css';

function CommissionBuilder() {

    // get artPiece ID from URL
    const {id: artPieceId} = useParams();

    // Fetch artwork data, provide first artwork as default if not id is provided (for navbar routing)
    const initialArtPiece = artworkData.find(
        piece => piece.id === Number(artPieceId)
    ) ?? artworkData[0];

    // add art piece to react state
    const [selectedArtPiece, setSelectedArtPiece] = useState(initialArtPiece);

    if (!initialArtPiece) {
        return (
            <h2>ART PIECE NOT FOUND</h2>
        );
    }

    // fetch the collection data
    const collection = sampleCollections.find(
        collection => collection.id === initialArtPiece.collectionId
    );

    if (!collection) {
        return (
            <h2>COLLECTION NOT FOUND</h2>
        );
    }

    // find data for the artwork selector
    const commissionArtWorks = artworkData
        .filter(piece => !piece.available) // piece cannot be ready for purchase
        .filter(piece => piece.id !== selectedArtPiece.id) // piece cannot be the currently selected piece
        .slice(0, 3); // limit to 3 pieces

    // ensure small canvas with black frame are the default selected options
    const [selectedSize, setSelectedSize] = useState<SizeOption>(sizeOptions[0]);
    const [selectedMaterial, setSelectedMaterial] = useState<MaterialOption>(materialOptions[0]);
    const [selectedFrame, setSelectedFrame] = useState<FrameOption>(frameOptions[0]);

    return (
        <main>

            <Section>
                <div className={styles.heading}>
                    <h2>Create your piece</h2>
                </div>

                <div className={styles.configurator}>

                    <div className={styles.previewColumn}>
                        <LivePreview 
                            artPiece={selectedArtPiece}
                            collection={collection}
                            selectedSize={selectedSize}
                            selectedMaterial={selectedMaterial}
                            selectedFrame={selectedFrame}
                        />
                    </div>

                    <div className={styles.optionsColumn}>
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
                            basePrice={selectedArtPiece.price ?? 300} // basic price e.g. €300
                            selectedSize={selectedSize}
                            selectedMaterial={selectedMaterial}
                            selectedFrame={selectedFrame}
                        />
                    </div>

                </div>
            
            </Section>
            
            <Section>
                <ArtworkSelector
                    pieces={commissionArtWorks}
                    selectedArtPiece={selectedArtPiece}
                    setSelectedArtPiece={setSelectedArtPiece}
                />
            </Section>

        </main>
    );
}

export default CommissionBuilder;