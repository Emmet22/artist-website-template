import ArtPiece from "./ArtPiece";

function Collection() {
    return (
        <div>
            <h3>COLLECTION NAME</h3>
            <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
               <ArtPiece /> 
               <ArtPiece />
               <ArtPiece />   
            </div>
        </div>
    );
}

export default Collection;