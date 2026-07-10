import type { CollectionData } from "../components/artwork/Collection";

export const sampleCollections: CollectionData[] = [
    {
        id: 1,
        name: "Woodland",
        description: "Earthy tones inspired by forest floors and bark.",
        pieces: 
        [
            { id: 1, imageURL: "https://placehold.co/150x150", title: "title", description: "Sample desc 1" },
            { id: 2, imageURL: "https://placehold.co/150x150", title: "title", description: "Sample desc 2" },
            { id: 3, imageURL: "https://placehold.co/150x150", title: "title", description: "Sample desc 3" },
        ],
    },
    {
        id: 2,
        name: "Beach",
        description: "Sample beach collection desc",
        pieces: [
            {id: 4, imageURL: "https://placehold.co/150x150", title: "title", description: "sample desc 4"},
            {id: 5, imageURL: "https://placehold.co/150x150", title: "title", description: "sample desc 5"},
        ],
    },
];

