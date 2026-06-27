import ArtPiece from "./ArtPiece";

interface ArtPieceData {
    id: number;
    imageURL: string;
    description: string;
}

// sample array of art piece data
const woodlandArtPieceData: ArtPieceData[] = [
    {id: 1, imageURL: "sampleURL", description: "Sample desc 1"},
    {id: 2, imageURL: "sampleURL2", description: "Sample desc 2"},
    {id: 3, imageURL: "sampleURL3", description: "Sample desc 3"}
];

function Collection() {
    return (
        <div>
            <h3>COLLECTION NAME</h3>
            <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
                { 
                woodlandArtPieceData.map((piece) => (
                    <ArtPiece 
                        key={piece.id}
                        imageURL={piece.imageURL}
                        description={piece.description}
                    />    
                ))
                }
            </div>
        </div>
    );
}

export default Collection;