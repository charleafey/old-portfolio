import React from 'react';
import Gallery from '../../components/gallery';
import Header from '../../components/header';
import { imageGalleryConfig } from '../../assets/imageConfig';

const Home : React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Header/>
            <Gallery imageList={imageGalleryConfig}/>
        </React.Fragment>
    );
}

export default Home;