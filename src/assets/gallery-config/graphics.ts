import AltariaSundae from '../images/altaria-sundae.png';
import OtterWave from '../images/otter-wave.png';
import CatKeyboard from '../images/cat-keyboard.jpg';
import GhibliDay from '../images/ghibli-day.png';
import GhibliNight from '../images/ghibli-night.png';
import Magazine from '../images/magazine.png';
import PrideTattoo from '../images/pride-tattoo.png';
import Willow from '../images/willow.jpg';

import { ImageGalleryConfigType, ImageProportions } from './types';

export const graphicsImageList : ImageGalleryConfigType = [
    {
        src: CatKeyboard,
        altText: "Calico Cat curled up above a keyboard",
    },
    {
        src: Willow,
        altText: "society hoodie design featuring willow the wombat",
    },
    {
        src: AltariaSundae,
        altText: "The pokemon Altaria, drawn as an icecream sundae",
    },
    {
        src: OtterWave,
        altText: "Otter riding a wave",
    },
    {
        src: GhibliDay,
        altText: "Ghibli-inspired design for society recruitment banner",
        shape: ImageProportions.Square,
    },
    {
        src: GhibliNight,
        altText: "Ghibli-inspired design for movie night banner",
        shape: ImageProportions.Square,
    },
    {
        src: Magazine,
        altText: "two-page magazine artwork spread featuring a woman in a dystopian world",
        shape: ImageProportions.Square,
    },
    {
        src: PrideTattoo,
        altText: "rainbow milk carton tattoo design for 2023 World Pride Sydney",
    },
    
];
