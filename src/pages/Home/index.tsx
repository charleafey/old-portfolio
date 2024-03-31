import React from 'react';
import { ReactComponent as InstaSvg } from '../../assets/insta.svg';
import Gallery from '../../components/gallery';

const titleStyles = {
    fontSize: '64px',
    fontWeight: 'normal',
}

const headerStyles = {
    margin: '30px',
    paddingBottom: '20px',
    borderBottom: '2px solid gray',
}

const Home : React.FunctionComponent = () => {
    return (
        <div>
            <div style={headerStyles}>
                <h1 style={titleStyles}>charraxeon</h1>
                <a href="https://www.instagram.com/charraxeon/">
                    <InstaSvg/>
                </a>
            </div>
            <Gallery/>
        </div>
    );
}

export default Home;