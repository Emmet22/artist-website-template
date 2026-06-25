function ArtPiece() {
    return (
        <div style={{display: "flex", flexDirection: "column", height: "300px", width: "300px"}}>
            <div style={{display: "flex", flexDirection: "row", border: "5px solid"}}>
                <div style={{border: "5px solid", height: "200px", width: "200px"}}>SAMPLE IMAGE DIV</div>
                <p>SAMPLE DESCRIPTION DESCRIVING THE ART PIECE</p>
            </div>
            <button>ENQUIRE</button>
        </div>
            
);
}

export default ArtPiece;