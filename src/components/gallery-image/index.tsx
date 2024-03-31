import React from 'react';

type GalleryImageProps = {
    imageSrc: string,
    altText: string,
}

export const GalleryImage : React.FunctionComponent<GalleryImageProps> = ({imageSrc, altText} : GalleryImageProps) => {
    return (<div>
        <img
            src={imageSrc} 
            alt={altText} 
            height='500px'
        />
    </div>)
}