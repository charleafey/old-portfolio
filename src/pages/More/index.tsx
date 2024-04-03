import React from 'react';
import Gallery from '../../components/gallery';
import { graphicsImageList } from '../../assets/gallery-config/graphics';

const MorePage : React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Gallery imageList={graphicsImageList}/>
        </React.Fragment>
    );
}

export default MorePage;