import React from 'react';
import Gallery from '../../components/gallery';
import Header from '../../components/header';
import { illustrationsImageList } from '../../assets/gallery-config/illustrations';

const Home : React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Header/>
            <Gallery imageList={illustrationsImageList}/>
        </React.Fragment>
    );
}

export default Home;