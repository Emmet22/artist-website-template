import {useParams} from 'react-router-dom';
import styles from './ArtDetail.module.css';
import { Link } from 'react-router-dom';

// import data
import { artworkData } from '../data/ArtPieceData';
import { sampleCollections } from '../data/SampleCollectionData';

// import components
import FeaturedArtwork from "../components/artwork/FeaturedArtwork";
import Section from "../components/common/Section";

function ArtDetail() {

    // get artPiece ID from URL
    const { id: artPieceId } = useParams();
    
    // retrieve artPiece obj using ID
    const artPiece = artworkData.find(
        piece => piece.id === Number(artPieceId)
    );

    // safety, incase there is no art piece
    if (!artPiece) {
        return (
            <h2>ART PIECE NOT FOUND</h2>
        );
    }

    // retrieve collection obj using collectionID from artPiece obj
    const collection = sampleCollections.find(
        collection => collection.id === artPiece.collectionId
    );

    // safety, incase there is no collection
    if (!collection) {
        return (
            <h2>COLLCECTION NOT FOUND</h2>
        );
    }

    return (
        <main>
            <Section>
                <div className={styles.artContent}>
                    <div className={styles.imgContainer}>
                        <img 
                            className={styles.artImage}
                            src={artPiece.imageURL}
                            alt={artPiece.title}
                        />
                    </div>

                    <div className={styles.infoContainer}>
                        <div className={styles.infoSection}>
                            <h1 className={styles.artTitle}>{artPiece.title}</h1>
                            <p>{artPiece.description}</p>
                        </div>

                        <div className={styles.infoSection}>
                            <h3 className={styles.collectionName}>{collection.name}</h3>
                            <p>{collection.description}</p>
                        </div>

                        <div className={styles.purchaseSection}>

                            { /* conditional logic to show purchase if piece is available and enquire if piece is not available */
                                artPiece.available ? (
                                    <>
                                        <p className={styles.price}>
                                            €{artPiece.price}
                                        </p>
                                        <button className='btn'>BUY NOW</button>
                                    </>
                                ) : (
                                    <>
                                        <p>
                                            Interested in creating your own version of this piece? 
                                        </p>
                                        <Link to={`/commission/${artPiece.id}`} className='btn'>CREATE YOUR PIECE</Link>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                {/* display 4 other pieces */ }
                <FeaturedArtwork
                    /*
                        logic for choosing pieces not implemented yet
                    */
                />
            </Section>
        </main>
    );
}

export default ArtDetail;