import React from 'react';
import './styles.css';
import { ImageProportions } from '../../assets/gallery-config/types';

type GalleryImageProps = {
    imageSrc: string,
    altText: string,
    shape?: ImageProportions,
}

const imageContainerStyles = {
    maxHeight : '500px',
    maxWidth: '350px',
}

const imageContainerSquareStyles = {
    height : '350px',
    width: '350px',
}

export const GalleryImage : React.FunctionComponent<GalleryImageProps> = ({imageSrc, altText, shape = ImageProportions.Original} : GalleryImageProps) => {
    
    const isSquare = shape === ImageProportions.Square;

    return (<div style={isSquare ? imageContainerSquareStyles : imageContainerStyles}>
        <img
            src={imageSrc} 
            alt={altText} 
            className={`galleryImage ${isSquare ? "square" : ""}`}
        />
    </div>)
}