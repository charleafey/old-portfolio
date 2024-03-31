import React from 'react';
import './styles.css';

type GalleryImageProps = {
    imageSrc: string,
    altText: string,
}

const imageContainerStyles = {
    maxHeight : '500px',
    maxWidth: '350px',
}

export const GalleryImage : React.FunctionComponent<GalleryImageProps> = ({imageSrc, altText} : GalleryImageProps) => {
    return (<div style={imageContainerStyles}>
        <img
            src={imageSrc} 
            alt={altText} 
            className="galleryImage"
        />
    </div>)
}