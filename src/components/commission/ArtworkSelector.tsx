import type React from "react";

import styles from './ArtworkSelector.module.css';

import type { ArtPiece } from '../../types/ArtPiece';

// props
interface ArtworkSelectorProps {
    pieces: ArtPiece[];
    selectedArtPiece: ArtPiece;
    setSelectedArtPiece: React.Dispatch<
        React.SetStateAction<ArtPiece>
    >;
}

function ArtworkSelector({ 
    pieces, 
    selectedArtPiece, 
    setSelectedArtPiece 
}: ArtworkSelectorProps) {
    return (
        <div className={styles.selector}>

            <div className={styles.heading}>
                <div className={styles.title}>
                    <h3>Explore other pieces</h3>
                </div>
                <div className={styles.text}>
                    <p>Choose another artwork to customise</p>
                </div>
            </div>

            <div className={styles.grid}>
                {pieces.map(piece => (
                    <div 
                        key={piece.id}
                        className={`${styles.card} 
                                    ${selectedArtPiece.id === piece.id 
                                    ? styles.active 
                                    : ""
                                    }`}
                        onClick={() => setSelectedArtPiece(piece)}
                    >
                    <img 
                        src={piece.imageURL}
                        alt={piece.title}
                    />
                    <h3>{piece.title}</h3>
                </div>
                ))}
                
            </div>
        </div>
    );
}

export default ArtworkSelector;
