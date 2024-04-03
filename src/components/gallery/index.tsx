import React from 'react';
import { GalleryImage } from '../gallery-image';
import { ImageGalleryConfigType } from '../../assets/gallery-config/types';

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

type GalleryProps = {
    imageList : ImageGalleryConfigType
}

export const Gallery : React.FunctionComponent<GalleryProps> = ({imageList} : GalleryProps) => {
    return (
        <div style={containerStyles}>
            <div style={galleryDisplayStyles}>
                {
                    imageList.map((info, index) => {
                        return (
                            <GalleryImage
                                imageSrc={info.src}
                                key={index}
                                altText={info.altText}
                                shape={info.shape}
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