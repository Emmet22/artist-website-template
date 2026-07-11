export interface ArtPiece {
    id: number;
    imageURL: string;
    title: string;
    description: string;

    // optional properties (for avalibale to purchase art pieces)
    price?: number;
    avaliable?: boolean;
}