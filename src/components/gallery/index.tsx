import React from 'react';
// refactor this so that it reads data from an object and THEN imports based on that data. 
import KazuhaImage from '../../assets/images/genshin-kazuha-leaves.png';
import RaidenImage from '../../assets/images/genshin-raiden-lotus.png';
import ScaraImage from '../../assets/images/genshin-scara-cat.png';
import VentiImage from '../../assets/images/genshin-venti-angel.png';
import YaeImage from '../../assets/images/genshin-yae-miko-sakura.png';

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

export default function Gallery() {
    return (
        <div style={containerStyles}>
        <div style={galleryDisplayStyles}>
            <img src={KazuhaImage} alt="Genshin Kazuha Leaves Artwork" height='500px' />
            <img src={RaidenImage} alt="Genshin Raiden Lotus Artwork" height='500px' />
            <img src={ScaraImage} alt="Genshin Scaramouche Artwork" height='500px' />
            <img src={VentiImage} alt="Genshin Venti Artwork" height='500px' />
            <img src={YaeImage} alt="Genshin Yae Miko Artwork" height='500px' />
        </div>
        </div>
    )
}