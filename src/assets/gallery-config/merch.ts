import PokemonStickersRegular from '../images/eeveelutions_left.png';
import PokemonStickersShiny from '../images/eeveelutions-right.png';
import FrogStickers from '../images/totk-frog-stickers.png';
import AltariaSundae from '../images/altaria-sundae.png';

import { ImageGalleryConfigType } from './types';

export const merchImageList : ImageGalleryConfigType = [
    {
        src: PokemonStickersRegular,
        altText: "Pokemon Eeveelution Stickers",
    },
    {
        src: PokemonStickersShiny,
        altText: "Pokemon Eeveelution Stickers - Shiny",
    },
    {
        src: FrogStickers,
        altText: "Tears of the Kingdom - Hot Footed Frog stickers with various plants and mushrooms",
    },
    {
        src: AltariaSundae,
        altText: "The pokemon Altaria, drawn as an icecream sundae",
    },
];
