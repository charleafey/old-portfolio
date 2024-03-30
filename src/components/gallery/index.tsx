import React from 'react';
import KazuhaImage from '../../assets/images/genshin-kazuha-leaves.png';
import RaidenImage from '../../assets/images/genshin-raiden-lotus.png';
import ScaraImage from '../../assets/images/genshin-scara-cat.png';

const galleryDisplayStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
}   

export default function Gallery() {
    return (
        <div style={galleryDisplayStyles}>
            <img src={KazuhaImage} alt="Genshin Kazuha Leaves Artwork" height='500px' />
            <img src={RaidenImage} alt="Genshin Raiden Lotus Artwork" height='500px' />
            <img src={ScaraImage} alt="Genshin Scaramouche Artwork" height='500px' />
        </div>
    )
}