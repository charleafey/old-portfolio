import React from 'react';
import Gallery from '../../components/gallery';
import Header from '../../components/header';

const Home : React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Header/>
            <Gallery/>
        </React.Fragment>
    );
}

export default Home;