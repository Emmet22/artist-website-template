import ArtPiece from "./ArtPiece";

interface ArtPieceData {
    id: number;
    imageURL: string;
    description: string;
}

interface CollectionData {
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

/* sample array of art piece data
const woodlandArtPieceData: ArtPieceData[] = [
    {id: 1, imageURL: "sampleURL", description: "Sample desc 1"},
    {id: 2, imageURL: "sampleURL2", description: "Sample desc 2"},
    {id: 3, imageURL: "sampleURL3", description: "Sample desc 3"}
];
*/

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
                {/* 
                woodlandArtPieceData.map((piece) => (
                    <ArtPiece 
                        key={piece.id}
                        imageURL={piece.imageURL}
                        description={piece.description}
                    />    
                ))
                */}
        </div>
    );
}

export default Collection;