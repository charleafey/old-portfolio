import KazuhaImage from './images/genshin-kazuha-leaves.png';
import RaidenImage from './images/genshin-raiden-lotus.png';
import ScaraImage from './images/genshin-scara-cat.png';
import VentiImage from './images/genshin-venti-angel.png';
import YaeImage from './images/genshin-yae-miko-sakura.png';
import KenmaImage from './images/haikyuu-kenma.png';
import UnaCielImage from './images/original-una-ciel-trees.png';
import PokemonStickersRegular from './images/eeveelutions_left.png';
import PokemonStickersShiny from './images/eeveelutions-right.png';
import ChihiroImage from './images/spirited-away-haku-chihiro.png';
import FrogStickers from './images/totk-frog-stickers.png';
import LinkDragonImage from './images/totk-link-dragon.png';
import ZeldaGrassImage from './images/totk-zelda-grass.png';


export type ImageConfigType = {
    src : string,
    altText: string,
};

type ImageGalleryConfigType = ImageConfigType[];


export const imageGalleryConfig : ImageGalleryConfigType = [
    {
        src: KazuhaImage,
        altText: "Genshin Kazuha Leaves Artwork",
    },
    {
        src: RaidenImage,
        altText: "Genshin Raiden Lotus Artwork",
    },
    {
        src: VentiImage,
        altText: "Genshin Venti Artwork",
    },
    
    {
        src: UnaCielImage,
        altText: "Original Artwork with OCs Una and Ciel in a eucalyptus forest",
    },
    {
        src: ChihiroImage,
        altText: "Chihiro and Dragon Haku in Ocean",
    },
    {
        src: LinkDragonImage,
        altText: "Tears of the Kingdom - Link and the Light Dragon in the sky at sunset",
    },
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
        src: ZeldaGrassImage,
        altText: "Tears of the Kingdom - Zelda lying in the grass, inspired by a scene at the end of the game",
    },
    {
        src: ScaraImage,
        altText: "Genshin Scaramouche Artwork",
    },
    {
        src: YaeImage,
        altText: "Genshin Impact - Yae Miko under sakura blossoms",
    },
    {
        src: KenmaImage,
        altText: "Haikyuu Kenma Artwork",
    },
];
