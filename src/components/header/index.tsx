import React from 'react';
import { ReactComponent as InstaSvg } from '../../assets/insta.svg';
import './styles.css';

const titleStyles = {
    fontSize: '64px',
    fontWeight: 'normal',
}

const headerStyles = {
    margin: '30px',
    paddingBottom: '20px',
    borderBottom: '2px solid lightgray',
}

const Header : React.FunctionComponent = () => {
    return (
        <div>
            <div style={headerStyles}>
                <h1 style={titleStyles}>charraxeon</h1>
                <p>charley (they/them)</p>
                <p><em>asian australian artist and chaser of colours through the trees.</em></p>
                <a href="https://www.instagram.com/charraxeon/">
                    <InstaSvg className="instaIcon"/>
                </a>
            </div>
        </div>
    );
}

export default Header;