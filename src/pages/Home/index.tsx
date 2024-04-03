import React from 'react';
import Gallery from '../../components/gallery';
import { illustrationsImageList } from '../../assets/gallery-config/illustrations';

const Home : React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Gallery imageList={illustrationsImageList}/>
        </React.Fragment>
    );
}

export default Home;