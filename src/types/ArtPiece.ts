export interface ArtPiece {
    id: number;
    collectionId: number;

    imageURL: string;

    title: string;
    description: string;

    // optional properties (for avalibale to purchase art pieces)
    price?: number;
    available?: boolean;
}