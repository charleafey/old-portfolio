import React from 'react';
import Gallery from '../../components/gallery';
import Header from '../../components/header';

const Home : React.FunctionComponent = () => {
    return (
        <div>
            <Header/>
            <Gallery/>
        </div>
    );
}

export default Home;