import PokemonStickersRegular from '../images/eeveelutions_left.png';
import PokemonStickersShiny from '../images/eeveelutions-right.png';
import TOTKFrogStickers from '../images/totk-frog-stickers.png';
import SharkStickers from '../images/shark-stickers.png';
import CatStickers from '../images/cat-stickers.png';
import FrogStickers from '../images/frog-stickers.png';

import { ImageGalleryConfigType } from './types';

export const merchImageList : ImageGalleryConfigType = [
    {
        src: SharkStickers,
        altText: "Blahaj Shark stickers",
    },
    {
        src: CatStickers,
        altText: "Cat stickers",
    },
    {
        src: FrogStickers,
        altText: "Frog stickers",
    },
    {
        src: TOTKFrogStickers,
        altText: "Tears of the Kingdom - Hot Footed Frog stickers with various plants and mushrooms",
    },
    {
        src: PokemonStickersRegular,
        altText: "Pokemon Eeveelution Stickers",
    },
    {
        src: PokemonStickersShiny,
        altText: "Pokemon Eeveelution Stickers - Shiny",
    },
];
