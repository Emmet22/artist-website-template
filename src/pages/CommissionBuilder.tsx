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
    const artPiece = artworkData.find(piece => piece.id === Number(artPieceId)) ?? artworkData[0];


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

            <Section>
                <div className={styles.heading}>
                    <h2>Create your piece</h2>
                </div>

                <div className={styles.configurator}>

                    <div className={styles.previewColumn}>
                        <LivePreview 
                            artPiece={artPiece}
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
                            basePrice={artPiece.price ?? 300} // basic price e.g. €300
                            selectedSize={selectedSize}
                            selectedMaterial={selectedMaterial}
                            selectedFrame={selectedFrame}
                        />
                    </div>

                </div>
            
            </Section>
            
        </main>
    );
}

export default CommissionBuilder;