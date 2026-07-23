export interface ArtPiece {
    id: number;
    collectionId: number;

    title: string;
    imageURL: string;
    description: string;

    // optional properties (for avalibale to purchase art pieces)
    price?: number;
    available?: boolean;

}