import styles from './LivePreview.module.css';

// import type
import type { ArtPiece } from '../../types/ArtPiece';

interface LivePreviewProps {
    artPiece: ArtPiece;
}

function LivePreview({ artPiece }: LivePreviewProps) {
    return (
        <div className={styles.livePreview}>
    
            <img 
                src={artPiece.imageURL} 
                alt={artPiece.title} 
            />
        </div>
    );
}

export default LivePreview;