export enum ImageProportions {
    Original,
    Square
}

export type ImageConfigType = {
    src : string,
    altText: string,
    shape?: ImageProportions,
};

export type ImageGalleryConfigType = ImageConfigType[];