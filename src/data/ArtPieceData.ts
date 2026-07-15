import type { ArtPiece } from "../types/ArtPiece";

// this is more sample data generated from ChatGPT 
export const artworkData: ArtPiece[] = [
    // PLANETS
    {
        id: 1,
        collectionId: 1,
        title: "Aurora",
        description: "Inspired by the vivid colours of the northern lights.",
        imageURL: "https://placehold.co/150x150",
        available: true,
        price: 450,
    },
    {
        id: 2,
        collectionId: 1,
        title: "Our Planet Mars",
        description: "A textured abstract interpretation of Mars.",
        imageURL: "https://placehold.co/150x150",
        available: true,
        price: 390,
    },
    {
        id: 3,
        collectionId: 1,
        title: "Blue Giant",
        description: "Deep blues inspired by Neptune's atmosphere.",
        imageURL: "https://placehold.co/150x150",
        available: false,
    },

    // BEACH
    {
        id: 4,
        collectionId: 2,
        title: "Coastal Breeze",
        description: "Soft evening colours overlooking the Atlantic.",
        imageURL: "https://placehold.co/150x150",
        available: true,
        price: 340,
    },
    {
        id: 5,
        collectionId: 2,
        title: "Golden Tide",
        description: "Warm golden reflections across the shoreline.",
        imageURL: "https://placehold.co/150x150",
        available: false,
    },
    {
        id: 6,
        collectionId: 2,
        title: "Sea Mist",
        description: "A cool, minimalist depiction of an Irish beach.",
        imageURL: "https://placehold.co/150x150",
        available: false,
    },

    // WOODLAND
    {
        id: 7,
        collectionId: 3,
        title: "Woodland Dawn",
        description: "Morning light breaking through ancient woodland.",
        imageURL: "https://placehold.co/150x150",
        available: false,
    },
    {
        id: 8,
        collectionId: 3,
        title: "Forest Floor",
        description: "Earthy textures inspired by moss and bark.",
        imageURL: "https://placehold.co/150x150",
        available: false,
    },
    {
        id: 9,
        collectionId: 3,
        title: "Hidden Trail",
        description: "A peaceful woodland path disappearing into the trees.",
        imageURL: "https://placehold.co/150x150",
        available: false,
    },
];