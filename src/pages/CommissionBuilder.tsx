import {useParams} from 'react-router-dom';
import { artworkData } from '../data/ArtPieceData';

function CommissionBuilder() {

    // get artPiece ID from URL
    const {id: artPieceId} = useParams();

    // fetch the artwork data
    const artPiece = artworkData.find(
        piece => piece.id === Number(artPieceId)
    );

    return (
        <div>
            <h1>Commission Builder</h1>
            <p>This is the Commission Builder page.</p>
            <p>ArtPiece id: {artPieceId}</p>

            <div>
                {artPiece ? (
                    <div>
                        <h2>{artPiece.title}</h2>
                        <img src={artPiece.imageURL} alt={artPiece.title} />
                        <p>{artPiece.description}</p>
                    </div>
                ) : (
                    <p>Art piece not found.</p>
                )}
            </div>
        </div>
    );
}

export default CommissionBuilder;