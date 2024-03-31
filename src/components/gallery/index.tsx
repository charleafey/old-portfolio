import React from 'react';
import { imageGalleryConfig } from '../../assets/imageConfig';
import { GalleryImage } from '../gallery-image';

const galleryDisplayStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    flexFlow: 'row wrap',
    maxWidth: '1200px',
}

const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
}

export const Gallery : React.FunctionComponent = () => {
    return (
        <div style={containerStyles}>
            <div style={galleryDisplayStyles}>
                {
                    imageGalleryConfig.map((info, index) => {
                        return (
                            <GalleryImage
                                imageSrc={info.src}
                                key={index}
                                altText={info.altText}
                            />
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Gallery;