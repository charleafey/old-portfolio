import React from 'react';
import Gallery from '../../components/gallery';
import { moreImageList } from '../../assets/gallery-config/more';

const MorePage : React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Gallery imageList={moreImageList}/>
        </React.Fragment>
    );
}

export default MorePage;