import React from 'react';
import { imageGalleryConfig } from '../../assets/imageConfig';

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
                            <img key={index} 
                                src={info.src} 
                                alt={info.altText} 
                                height='500px'
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