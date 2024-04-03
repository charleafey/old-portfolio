import React from 'react';
import Gallery from '../../components/gallery';
import { merchImageList } from '../../assets/gallery-config/merch';

const MerchPage : React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Gallery imageList={merchImageList}/>
        </React.Fragment>
    );
}

export default MerchPage;