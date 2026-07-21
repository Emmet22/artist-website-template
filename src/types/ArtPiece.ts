import type { SizeOption } from './SizeOption';
import type { FrameOption } from './FrameOption';
import type { MaterialOption } from './MaterialOption';

export interface ArtPiece {
    id: number;
    collectionId: number;

    title: string;
    imageURL: string;
    description: string;

    // optional properties (for avalibale to purchase art pieces)
    price?: number;
    available?: boolean;

    // commission properties (for not available to purchase art pieces)
    sizeOptions: SizeOption[];
    frameOptions: FrameOption[];
    materialOptions: MaterialOption[];


}