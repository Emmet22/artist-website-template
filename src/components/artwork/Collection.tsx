import ArtPiece from "./ArtPiece";

export interface ArtPieceData {
    id: number;
    imageURL: string;
    description: string;
}

export interface CollectionData {
    id: number;
    name: string;
    description: string;
    pieces: ArtPieceData[];
}

interface CollectionProps {
    name: string;
    description: string;
    pieces: ArtPieceData[];
}

function Collection({name, description, pieces}: CollectionProps) {
    return (
        <div>

            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
                    {
                        pieces.map((piece) => 
                            <ArtPiece 
                            key={piece.id}
                            imageURL={piece.imageURL}
                            description={piece.description}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Collection;