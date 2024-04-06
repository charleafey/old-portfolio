import React from 'react';
import { ReactComponent as InstaSvg } from '../../assets/insta.svg';
import './styles.css';
import { NavLink } from 'react-router-dom';

const titleStyles = {
    fontSize: '64px',
    fontWeight: 'normal',
}

const headerStyles = {
    margin: '30px',
    paddingBottom: '20px',
    borderBottom: '2px solid lightgray',
}

const navStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    flexFlow: 'row wrap',
    marginBottom: '50px',
}

const Header : React.FunctionComponent = () => {
    return (
        <React.Fragment>
        <div style={headerStyles}>
            <h1 style={titleStyles}>charraxeon</h1>
            <p style={{fontWeight: "bold"}}>charley <span className="pronouns">(they/them)</span></p>
            <p><em>asian australian artist and chaser of colours through the trees.</em></p>
            <a href="https://www.instagram.com/charraxeon/">
                <InstaSvg className="instaIcon"/>
            </a>
            
        </div>
        <nav style={navStyles}>
            <NavLink to="/" className="pageLink">ILLUSTRATION</NavLink>
            <NavLink to="/stickers" className="pageLink">STICKERS</NavLink>
        </nav>
    </React.Fragment>
    );
}

export default Header;