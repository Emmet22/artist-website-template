import type { SizeOption } from "../types/SizeOption";
import type { FrameOption } from "../types/FrameOption";
import type { MaterialOption } from "../types/MaterialOption";


export const sizeOptions: SizeOption[] = [
    {
        id: 1,
        name: "Small",
        width: 30,
        height: 40,
        priceModifier: 0
    },
    {
        id: 2,
        name: "Medium",
        width: 50,
        height: 70,
        priceModifier: 20
    },
    {
        id: 3,
        name: "Large",
        width: 70,
        height: 100,
        priceModifier: 70
    }
];


export const frameOptions: FrameOption[] = [
    {
        id: 1,
        name: "Black Frame",
        color: "Black",
        priceModifier: 20
    },
    {
        id: 2,
        name: "White Frame",
        color: "White",
        priceModifier: 20
    },
    {
        id: 3,
        name: "Natural Oak Frame",
        color: "Oak",
        priceModifier: 40
    }
];


export const materialOptions: MaterialOption[] = [
    {
        id: 1,
        name: "Canvas",
        priceModifier: 0
    },
    {
        id: 2,
        name: "Fine Art Print",
        priceModifier: -50
    },
    {
        id: 3,
        name: "Mounted Card",
        priceModifier: -100
    }
];