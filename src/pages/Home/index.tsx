import React from 'react';
import { ReactComponent as InstaSvg } from '../../assets/insta.svg';

const titleStyles = {
    fontSize: '64px',
    fontWeight: 'normal'
}

export default function Home() {
    return (
        <div>
            <h1 style={titleStyles}>charraxeon</h1>
            <a href="https://www.instagram.com/charraxeon/">
                <InstaSvg/>
            </a>
        </div>
    )
}