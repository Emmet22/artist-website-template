import {useParams} from 'react-router-dom';

function ArtDetail() {
    const { id } = useParams();
    
    return (
        <>
        <main>
            <h3>THIS IS THE ART DETAIL PAGE</h3>
            <p>Art ID: {id}</p>
        
        </main>
        </>
    );
}

export default ArtDetail;